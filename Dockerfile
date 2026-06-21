# Stage 1: Build de l'application
FROM node:18-alpine AS builder
RUN apk add --no-cache openssl
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Image finale de production (On vire les outils de dev)
FROM node:18-alpine AS runner
RUN apk add --no-cache openssl
WORKDIR /app

# Sécurité obligatoire : On ne tourne PAS en root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# On copie uniquement ce qui est nécessaire pour "next start"
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

USER appuser
EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
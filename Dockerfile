FROM node:20-alpine

# 1. On installe OpenSSL (indispensable pour Prisma sous Alpine)
RUN apk add --no-cache openssl

WORKDIR /app

# 2. On copie les fichiers de configuration des paquets
COPY package*.json ./

# 3. ON COPIE LE DOSSIER PRISMA ICI (pour que le postinstall de npm install fonctionne)
COPY prisma ./prisma/

# 4. L'installation se lance et génère le client Prisma sans erreur
RUN npm install

# 5. On copie le reste de ton code source
COPY . .

# 6. On build l'application Next.js
RUN npm run build

EXPOSE 3000

# 7. Au démarrage du conteneur, on applique les migrations puis on lance l'app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
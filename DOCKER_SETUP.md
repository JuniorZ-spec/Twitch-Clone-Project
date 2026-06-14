# Docker Setup Guide - Twitch Clone

## 📋 Prerequisites

- Docker & Docker Compose installed
- `.env` file configured with your API keys

## 🚀 Quick Start

### 1. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

- Clerk API keys
- LiveKit credentials
- UploadThing API keys
- Svix webhook secrets

### 2. Build and Start Services

```bash
# Development environment
docker-compose up -d

# Production environment
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### 3. Initialize Database

```bash
# Run Prisma migrations
docker-compose exec app npx prisma migrate deploy

# Seed database (if seed script exists)
docker-compose exec app npx prisma db seed
```

## 📊 Services

### MySQL Database

- **Host**: `db` (or `localhost` from host)
- **Port**: `3306`
- **User**: `twitch_user`
- **Password**: `jesuisfort` (from `.env`)
- **Database**: `twitch_clone`

### Redis Cache

- **Host**: `redis` (or `localhost` from host)
- **Port**: `6379`
- **Access**: `redis://redis:6379`

### Next.js Application

- **URL**: http://localhost:3000
- **Port**: `3000`

### PHPMyAdmin (Database Management)

- **URL**: http://localhost:8081
- **User**: `twitch_user` or `root`

### Redis Commander (Redis Management)

- **URL**: http://localhost:8082

## 🛠️ Common Commands

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f app

# Last 100 lines
docker-compose logs --tail=100 app
```

### Stop Services

```bash
# Stop but keep containers
docker-compose stop

# Stop and remove containers
docker-compose down

# Remove volumes too (WARNING: deletes data)
docker-compose down -v
```

### Execute Commands

```bash
# Run Prisma commands
docker-compose exec app npx prisma studio
docker-compose exec app npx prisma migrate status

# Access MySQL console
docker-compose exec db mysql -u twitch_user -p twitch_clone

# Access Redis CLI
docker-compose exec redis redis-cli
```

### Rebuild Services

```bash
# Rebuild app image
docker-compose build --no-cache app

# Rebuild all images
docker-compose build --no-cache
```

## 🔧 Development Workflow

### Hot Reload

The app volumes are mounted, so code changes automatically reload:

- `./app`
- `./components`
- `./hooks`
- `./lib`
- `./actions`
- `./store`

### Debug Database

```bash
# Access PHPMyAdmin: http://localhost:8081
# Access Redis Commander: http://localhost:8082
```

## 📝 Environment Variables Reference

| Variable                            | Description                          | Required |
| ----------------------------------- | ------------------------------------ | -------- |
| `MYSQL_ROOT_PASSWORD`               | MySQL root password                  | Yes      |
| `MYSQL_USER`                        | MySQL application user               | Yes      |
| `MYSQL_PASSWORD`                    | MySQL application password           | Yes      |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key                     | Yes      |
| `CLERK_SECRET_KEY`                  | Clerk secret key                     | Yes      |
| `LIVEKIT_API_KEY`                   | LiveKit API key                      | Yes      |
| `LIVEKIT_API_SECRET`                | LiveKit API secret                   | Yes      |
| `LIVEKIT_URL`                       | LiveKit server URL                   | Yes      |
| `UPLOADTHING_SECRET`                | UploadThing secret                   | Yes      |
| `UPLOADTHING_APP_ID`                | UploadThing app ID                   | Yes      |
| `SVIX_WEBHOOK_SECRET`               | Svix webhook secret                  | No       |
| `NODE_ENV`                          | Environment (development/production) | No       |

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different ports in .env
APP_PORT=3001
DB_PORT=3307
```

### Database Connection Error

```bash
# Check database health
docker-compose exec db mysqladmin ping

# Check if database exists
docker-compose exec db mysql -u root -p -e "SHOW DATABASES;"
```

### App Won't Start

```bash
# Check logs
docker-compose logs app

# Verify migrations
docker-compose exec app npx prisma migrate status

# Rebuild image
docker-compose build --no-cache app
docker-compose up -d
```

### Redis Connection Issues

```bash
# Test Redis connection
docker-compose exec redis redis-cli ping

# Check Redis logs
docker-compose logs redis
```

## 🔒 Production Deployment

For production:

1. Use `docker-compose.prod.yml` overlay
2. Set `NODE_ENV=production`
3. Use strong passwords in `.env`
4. Configure proper database backups
5. Use environment-specific domain names
6. Enable HTTPS/SSL certificates

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 🧹 Cleanup

```bash
# Remove all containers and networks
docker-compose down

# Remove everything including volumes (CAUTION!)
docker-compose down -v

# Remove unused Docker images
docker image prune

# Full cleanup (removes all unused resources)
docker system prune -a
```

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

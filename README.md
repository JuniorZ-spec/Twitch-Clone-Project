# 📺 Twitch Clone Project

A full-stack streaming platform built with modern web technologies, featuring real-time video streaming, live chat, and a complete social network. This project demonstrates production-grade architecture with Docker, Kubernetes, and Terraform infrastructure.

## ✨ Features

### Core Features
- **Live Streaming** - HLS-based video streaming with quality adaptation
- **Real-time Chat** - WebSocket-powered live chat with moderation
- **User Profiles** - Customizable user profiles with bio and avatars
- **Follow System** - Follow/unfollow creators and receive notifications
- **Block System** - Block unwanted users to prevent interaction
- **Search** - Full-text search for streamers and content
- **Recommendations** - Personalized stream recommendations
- **Creator Dashboard** - Stream management and analytics

### Platform Features
- 🌙 **Dark/Light Theme** - Toggle between light and dark modes
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔐 **Authentication** - Secure authentication via Clerk
- 💾 **Cloud Storage** - MinIO for scalable file storage
- ⚡ **Caching** - Redis for optimal performance
- 🎬 **Video Processing** - Automatic thumbnail generation
- 🔔 **Webhooks** - Event-driven architecture with Svix

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Zustand** - State management
- **HLS.js** - Video player

### Backend
- **Next.js API Routes** - Backend API
- **Prisma** - ORM for database management
- **MySQL** - Relational database
- **Redis** - In-memory caching

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Kubernetes** - Container orchestration
- **Terraform** - Infrastructure as Code
- **ArgoCD** - GitOps continuous deployment
- **MinIO** - Object storage
- **LiveKit** - Real-time communication

### Third-party Services
- **Clerk** - Authentication and user management
- **UploadThing** - File uploads
- **Svix** - Webhook management
- **AWS S3** - Cloud storage backup

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ and npm/yarn
- **Docker** and **Docker Compose**
- **MySQL** 8+ (if running locally)
- **Redis** (if running locally)
- **Git**

### Required API Keys
- Clerk API keys (authentication)
- LiveKit credentials (video streaming)
- UploadThing API key (file uploads)
- Svix webhook key (webhooks)
- AWS S3 credentials (optional, for backup)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/JuniorZ-spec/Twitch-Clone-Project.git
cd Twitch-Clone-Project
```

### 2. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your API credentials:

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/twitch_clone"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# LiveKit (Real-time video/chat)
NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
LIVEKIT_API_KEY=your_api_key
LIVEKIT_API_SECRET=your_api_secret

# UploadThing (File uploads)
UPLOADTHING_SECRET=your_secret
NEXT_PUBLIC_UPLOADTHING_APP_ID=your_app_id

# Svix (Webhooks)
SVIX_WEBHOOK_SECRET=your_webhook_secret

# MinIO (Object storage)
MINIO_ROOT_USER=minioadmin
MINIO_ROOT_PASSWORD=minioadmin
NEXT_PUBLIC_MINIO_URL=http://localhost:9000

# AWS S3 (Optional)
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=your_region
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Optional: seed database
npx prisma db seed
```

### 5. Run Development Server

#### Option A: Using Docker Compose

```bash
docker-compose up -d
```

This will start:
- Next.js application (port 3000)
- MySQL database (port 3306)
- Redis cache (port 6379)
- MinIO storage (port 9000)

#### Option B: Local Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
Twitch-Clone-Project/
├── app/                          # Next.js app directory
│   ├── (auth)/                  # Authentication pages
│   ├── (browse)/                # Public browsing pages
│   ├── (dashboard)/             # Creator dashboard
│   ├── api/                     # API routes
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── stream-player/           # Video streaming components
│   └── ui/                      # UI component library
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and services
│   ├── auth-service.ts          # Authentication logic
│   ├── stream-service.ts        # Stream management
│   ├── feed-service.ts          # Feed generation
│   ├── search-service.ts        # Search functionality
│   └── user-service.ts          # User management
├── actions/                      # Server actions
├── store/                        # Zustand state management
├── prisma/                       # Database schema
├── public/                       # Static assets
├── k8s/                          # Kubernetes configurations
├── Terraform/                    # Infrastructure as Code
├── docker-compose.yml            # Local development setup
└── next.config.js                # Next.js configuration
```

## 🐳 Docker Setup

### Build Images

```bash
# Development image
docker build -t twitch-clone:dev -f Dockerfile .

# Production image
docker build -t twitch-clone:prod -f Dockerfile.prod .
```

### Run with Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Remove volumes (reset database)
docker-compose down -v
```

See [DOCKER_SETUP.md](./DOCKER_SETUP.md) for detailed Docker configuration.

## ☸️ Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (1.24+)
- kubectl configured
- Helm (optional)

### Deploy to Kubernetes

```bash
# Navigate to k8s directory
cd k8s

# Deploy to production namespace
kubectl create namespace twitch-prod
kubectl apply -f twitch-prod/

# Monitor deployment
kubectl get pods -n twitch-prod
kubectl logs -f deployment/app -n twitch-prod

# Access the application
kubectl port-forward svc/app 3000:3000 -n twitch-prod
```

### Included Kubernetes Resources
- **app-deployment.yaml** - Application deployment
- **mysql.yaml** - MySQL database
- **redis.yaml** - Redis cache
- **minio.yaml** - Object storage
- **ingress.yaml** - Network ingress

## 🏗️ Infrastructure as Code (Terraform)

### Setup

```bash
cd Terraform

# Initialize Terraform
terraform init

# Plan infrastructure
terraform plan

# Apply configuration
terraform apply

# Destroy infrastructure
terraform destroy
```

### Terraform Modules
- **compute.tf** - Compute resources (VM, autoscaling)
- **network.tf** - VPC, subnets, security groups
- **providers.tf** - Cloud provider configuration
- **variables.tf** - Input variables
- **outputs.tf** - Output values

## 📝 Database Schema

Key entities in the database:

### User
```
- id: UUID (primary key)
- username: String (unique)
- imageUrl: Text
- externalUserId: String (from Clerk)
- bio: Text
- createdAt, updatedAt: DateTime
```

### Stream
```
- id: UUID (primary key)
- userId: UUID (foreign key)
- name: String
- thumbnailUrl: Text
- ingressId: String (LiveKit)
- serverUrl, streamKey: String
- isLive: Boolean
- isChatEnabled: Boolean
- isChatDelayed: Boolean
- isChatFollowersOnly: Boolean
```

### Follow
```
- id: UUID
- followingId: UUID (user being followed)
- followerId: UUID (user who follows)
```

### Block
```
- id: UUID
- blockingId: UUID (user doing blocking)
- blockedId: UUID (user being blocked)
```

## 🔑 Key API Endpoints

### Streams
- `GET /api/streams` - List all live streams
- `GET /api/streams/[username]` - Get stream by username
- `POST /api/streams` - Create/update stream (auth required)
- `DELETE /api/streams` - Delete stream (auth required)

### Users
- `GET /api/users/[username]` - Get user profile
- `PUT /api/users/profile` - Update user profile (auth required)

### Chat
- `POST /api/chat/message` - Send chat message
- `GET /api/chat/messages` - Get chat messages

### Uploads
- `POST /api/uploadthing/core` - Upload files

## 🔐 Authentication

This project uses **Clerk** for authentication. Features include:

- Email/password authentication
- Social sign-up (Google, GitHub, etc.)
- Multi-factor authentication (MFA)
- Session management

Protected routes require authentication middleware in `middleware.ts`.

## 🎬 Real-time Features

### Video Streaming
- **HLS Protocol** - Adaptive bitrate streaming
- **LiveKit Integration** - Real-time video infrastructure
- **Quality Selection** - Automatic quality based on bandwidth

### Chat System
- **WebSocket Connection** - Low-latency messaging
- **Chat Moderation** - Mute/timeout users
- **Follower-only Mode** - Restrict chat access

## 🔧 Development

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### Database Migrations

```bash
# Create new migration
npx prisma migrate dev --name migration_name

# View migration status
npx prisma migrate status

# Reset database (dev only)
npx prisma migrate reset
```

## 📦 Dependencies Management

### Update Dependencies

```bash
npm update
```

### Check Vulnerable Packages

```bash
npm audit
npm audit fix
```

## 🚨 Troubleshooting

### Database Connection Issues

```bash
# Check database connection
mysql -h localhost -u twitch_user -p

# Reset migrations
npx prisma migrate reset
```

### Docker Issues

```bash
# Remove all containers and volumes
docker-compose down -v

# Rebuild images
docker-compose build --no-cache

# Restart services
docker-compose up -d
```

### Redis Connection

```bash
# Check Redis connection
redis-cli ping

# Flush cache
redis-cli FLUSHALL
```

## 📊 Monitoring

### Application Logs

```bash
# Docker logs
docker-compose logs -f app

# Kubernetes logs
kubectl logs -f deployment/app -n twitch-prod
```

### Database Monitoring

```bash
# MySQL query log
SHOW PROCESSLIST;

# Slow query log
SET GLOBAL slow_query_log = 'ON';
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **JuniorZ-spec** - Project maintainer

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [LiveKit Documentation](https://docs.livekit.io)
- [Kubernetes Documentation](https://kubernetes.io/docs)
- [Terraform Documentation](https://www.terraform.io/docs)

## 💬 Support

For questions or issues:
- Open an issue on GitHub
- Check existing documentation in the project
- Review Docker and Kubernetes setup guides

## 🎯 Roadmap

- [ ] Mobile application (React Native)
- [ ] Analytics dashboard
- [ ] Advanced moderation tools
- [ ] Custom emotes
- [ ] Subscription system
- [ ] Affiliate program
- [ ] Multi-language support

---

**Last Updated**: July 2026

Built with ❤️ by the development team

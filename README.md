# 📺 Twitch Clone - Plateforme de Streaming en Direct



<img width="1672" height="941" alt="ChatGPT Image 24 juin 2026, 16_26_18" src="https://github.com/user-attachments/assets/381e2b4c-831e-418c-ac93-9a15a4d2897a" />


<img width="960" height="479" alt="Capture d’écran 2026-06-24 102335" src="https://github.com/user-attachments/assets/5a5c01fc-e482-49d4-9f6f-a5cc350b98d8" />
<img width="960" height="540" alt="Capture d’écran 2026-06-24 131758" src="https://github.com/user-attachments/assets/603033d8-5a23-4ac8-ae7d-f04db759116c" />
<img width="946" height="473" alt="Capture d’écran 2026-06-22 133758" src="https://github.com/user-attachments/assets/22abfcf8-aabb-4b73-8efa-496a5fde4cef" />













<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.6-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=flat-square&logo=mysql)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5?style=flat-square&logo=kubernetes)](https://kubernetes.io/)

**Une plateforme de streaming en direct complète, construite avec les technologies web les plus modernes**

[Fonctionnalités](#-fonctionnalités) • [Installation](#-installation) • [Architecture](#-architecture) • [Déploiement](#-déploiement) • [Contribution](#-contribution)

</div>

---

## 🎯 Vue d'ensemble

Twitch Clone est une plateforme de streaming en direct full-stack conçue pour démontrer une architecture de production robuste. Elle combine le streaming vidéo en temps réel, le chat social, les notifications en direct et un système de recommandations intelligent. Le projet utilise les meilleures pratiques modernes avec une infrastructure complètement conteneurisée et orchestrée.

## ✨ Fonctionnalités

### 🎬 Streaming & Vidéo

- **Streaming en Direct HLS** - Diffusion vidéo avec adaptation de qualité automatique
- **Ingestion RTMP** - Support complet du protocole RTMP pour les encodeurs externes (OBS, ffmpeg, etc.)
- **Lecteur Video Adaptatif** - Lecteur HLS.js avec contrôle de volume et mode plein écran
- **Miniatures Personnalisées** - Upload et gestion de miniatures pour chaque stream
- **Thumbnails Générées** - Génération automatique de captures d'écran

### 💬 Communication & Modération

- **Chat en Temps Réel** - WebSocket intégré pour un chat instantané
- **Modération du Chat** - Désactiver le chat, restricter aux followers, délai de chat
- **Système de Blocage** - Bloquer les utilisateurs indésirables
- **Notifications Directes** - Système d'alertes en temps réel
- **Historique du Chat** - Conservation du chat pendant la session en direct

### 👥 Réseau Social

- **Système de Follow** - Suivre/Arrêter de suivre les créateurs
- **Profils Utilisateur** - Profils personnalisables avec bio et avatar
- **Pages Créateur** - Présentation complète du créateur et de ses streams
- **Système de Réputation** - Suivi des followers et de la communauté

### 🔍 Découverte & Recommandations

- **Recherche Texte Complet** - Recherche performante des streamers et contenus
- **Recommandations Personnalisées** - Suggestions basées sur l'historique de l'utilisateur
- **Fil d'Actualité** - Affichage des streams en direct des créateurs suivis
- **Trending Streams** - Découverte des streams populaires

### 📊 Tableau de Bord Créateur

- **Gestion des Streams** - Créer, éditer, activer/désactiver les streams
- **Analytics** - Statistiques de viewers et de performance
- **Configuration de Chat** - Contrôler les paramètres de modération du chat
- **Gestion des Clés RTMP** - Générer et gérer les clés de streaming

### 🎨 Interface Utilisateur

- 🌙 **Thème Sombre/Clair** - Basculer entre les modes sombre et clair
- 📱 **Design Responsive** - Interface complètement adaptée desktop, tablette et mobile
- ♿ **Accessibilité WCAG** - Composants Radix UI conformes aux normes d'accessibilité
- 🎭 **Animations Fluides** - Transitions CSS fluides avec Tailwind CSS Animate

### 🔐 Sécurité & Authentification

- **Authentification Clerk** - Authentification sécurisée et gestion des sessions
- **Webhooks Svix** - Événements synchronisés en temps réel
- **JWT Validation** - Tokens JWT pour l'ingestion vidéo
- **Données Chiffrées** - Gestion sécurisée des données sensibles

## 🛠️ Stack Technique

### Frontend

| Technologie      | Version | Usage                                     |
| ---------------- | ------- | ----------------------------------------- |
| **Next.js**      | 14.2    | Framework React full-stack avec SSR       |
| **React**        | 18      | Bibliothèque UI                           |
| **TypeScript**   | 5.x     | Typage statique                           |
| **Tailwind CSS** | 3.x     | Styling utility-first                     |
| **Radix UI**     | 1.x     | Composants accessibles                    |
| **Zustand**      | 4.4     | Gestion d'état minimaliste                |
| **HLS.js**       | 1.6     | Lecteur vidéo HLS                         |
| **React Query**  | -       | Gestion du cache et de la synchronisation |
| **Sonner**       | 1.2     | Toasts notifications                      |

### Backend & Base de Données

| Technologie            | Version | Usage                         |
| ---------------------- | ------- | ----------------------------- |
| **Next.js API Routes** | 14.2    | Backend API REST              |
| **Prisma**             | 5.6     | ORM & migrations              |
| **MySQL**              | 8.0     | Base de données relationnelle |
| **Redis**              | 7       | Cache et sessions             |
| **JWT**                | 4.0     | Authentification tokens       |

### Services Externes

| Service         | Usage                                   |
| --------------- | --------------------------------------- |
| **Clerk**       | Authentification et gestion utilisateur |
| **UploadThing** | Upload de fichiers                      |
| **Svix**        | Webhooks et événements                  |
| **MinIO**       | Stockage objet compatible S3            |
| **SRS**         | Serveur streaming RTMP/HLS              |

### Infrastructure & DevOps

| Outil              | Version | Usage                        |
| ------------------ | ------- | ---------------------------- |
| **Docker**         | Latest  | Containerisation             |
| **Docker Compose** | 3.8     | Orchestration locale         |
| **Kubernetes**     | 1.x     | Orchestration production     |
| **Terraform**      | Latest  | Infrastructure as Code (IaC) |
| **ArgoCD**         | Latest  | GitOps CD                    |
| **SRS**            | 5       | Streaming server             |

## 📁 Structure du Projet

```
Twitch-Clone-Project/
├── 📄 Configuration & Déploiement
│   ├── docker-compose.yml          # Orchestration Docker locale
│   ├── Dockerfile                  # Image container
│   ├── argocd-app.yaml            # Configuration ArgoCD
│   ├── srs.conf                   # Configuration serveur streaming
│   ├── DOCKER_SETUP.md            # Guide Docker
│   └── DOCKER_SETUP.md
│
├── 🎨 Frontend (Next.js)
│   ├── components/                # Composants réutilisables
│   │   ├── stream-player/         # Lecteur stream (20+ composants)
│   │   ├── ui/                    # Composants Radix UI
│   │   ├── hint.tsx
│   │   ├── live-badge.tsx
│   │   ├── user-avatar.tsx
│   │   └── ...
│   ├── app/                       # Routes et pages Next.js
│   │   ├── (auth)/                # Routes authentification
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (browse)/              # Routes publiques
│   │   │   ├── (home)/            # Page d'accueil
│   │   │   ├── [username]/        # Profil créateur
│   │   │   └── search/            # Recherche
│   │   ├── (dashboard)/           # Dashboard créateur
│   │   │   └── u/                 # Routes utilisateur
│   │   ├── api/                   # API Routes
│   │   │   ├── minio/             # Endpoints MinIO
│   │   │   ├── uploadthing/       # Endpoints UploadThing
│   │   │   └── webhooks/          # Webhooks Svix
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── error.tsx
│   ├── store/                     # Zustand stores
│   │   ├── use-sidebar.ts
│   │   ├── use-creator-sidebar.ts
│   │   └── use-chat-sidebar.ts
│   ├── hooks/                     # Custom React hooks
│   │   └── use-viewer-token.ts
│   ├── middleware.ts              # Middleware Next.js
│   ├── tailwind.config.ts
│   └── next.config.js
│
├── 🔌 Backend & Services
│   ├── actions/                   # Server Actions
│   │   ├── block.ts              # Gestion des blocages
│   │   ├── follow.ts             # Gestion des suivis
│   │   ├── ingress.ts            # Gestion de l'ingestion RTMP
│   │   ├── stream.ts             # Gestion des streams
│   │   ├── token.ts              # Gestion des tokens
│   │   └── user.ts               # Gestion des utilisateurs
│   ├── lib/                       # Logique métier
│   │   ├── auth-service.ts       # Services d'authentification
│   │   ├── block-service.ts      # Services de blocage
│   │   ├── feed-service.ts       # Services du fil d'actualité
│   │   ├── follow-service.ts     # Services de suivi
│   │   ├── stream-service.ts     # Services streaming
│   │   ├── user-service.ts       # Services utilisateur
│   │   ├── search-service.ts     # Services de recherche
│   │   ├── recommended-service.ts # Services de recommandations
│   │   ├── minio.ts              # Client MinIO
│   │   ├── db.ts                 # Configuration BD
│   │   ├── uploadthing.ts        # Configuration UploadThing
│   │   └── utils.ts              # Utilitaires
│   └── prisma/
│       └── schema.prisma          # Schéma Prisma (modèles BD)
│
├── 🚀 Infrastructure
│   ├── Terraform/                 # Infrastructure as Code
│   │   ├── providers.tf           # Fournisseurs (AWS, GCP, etc.)
│   │   ├── variables.tf           # Variables d'entrée
│   │   ├── outputs.tf             # Sorties Terraform
│   │   ├── compute.tf             # Ressources de calcul
│   │   ├── network.tf             # Configuration réseau
│   │   └── terraform.tfstate      # État infrastructure
│   └── k8s/                       # Manifestes Kubernetes
│       ├── argocd/                # Configuration ArgoCD
│       ├── monitoring/            # Stack de monitoring
│       └── twitch-prod/           # Manifestes production
│           ├── app-deployment.yaml
│           ├── ingress.yaml
│           ├── minio.yaml
│           └── mysql.yaml
│
└── 📋 Configuration
    ├── package.json              # Dépendances NPM
    ├── tsconfig.json             # Configuration TypeScript
    ├── components.json           # Configuration CLI
    └── postcss.config.js         # Configuration PostCSS
```

## 🚀 Installation & Configuration

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18+ et npm/yarn
- **Docker** & **Docker Compose**
- **Git**
- Comptes pour les services externes :
  - Clerk (authentification)
  - UploadThing (upload de fichiers)
  - Svix (webhooks)

### 1️⃣ Cloner le Dépôt

```bash
git clone https://github.com/JuniorZ-spec/Twitch-Clone-Project.git
cd Twitch-Clone-Project
```

### 2️⃣ Configuration des Variables d'Environnement

```bash
# Copier le fichier .env.example
cp .env.example .env.local
```

Éditer `.env.local` et ajouter vos credentials :

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# UploadThing (file uploads)
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Svix Webhooks
SVIX_WEBHOOK_SECRET=your_svix_webhook_secret

# Database
DATABASE_URL=mysql://twitch_user:jesuisfort@db:3306/twitch_clone

# Redis
REDIS_URL=redis://redis:6379

# MinIO (Object Storage)
MINIO_ENDPOINT=http://minio:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=twitch-clone
MINIO_REGION=us-east-1

# SRS Streaming Server
SRS_RTMP_URL=rtmp://srs/live
SRS_HLS_URL=http://srs:8080/live
NEXT_PUBLIC_SRS_HLS_URL=http://localhost:8080/live
NEXT_PUBLIC_USE_SRS=true

# MinIO Public URL
NEXT_PUBLIC_MINIO_PUBLIC_URL=http://localhost:9000
```

### 3️⃣ Installation des Dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install
```

### 4️⃣ Démarrer l'Infrastructure avec Docker Compose

```bash
# Démarrer tous les services
docker-compose up -d

# Vérifier l'état des services
docker-compose ps

# Voir les logs
docker-compose logs -f
```

### 5️⃣ Initialiser la Base de Données

```bash
# Exécuter les migrations Prisma
npx prisma migrate deploy

# Générer le client Prisma
npx prisma generate

# (Optionnel) Seeder la base de données
npx prisma db seed
```

### 6️⃣ Démarrer l'Application

```bash
# Mode développement
npm run dev

# L'application est accessible sur http://localhost:3000
```

## 🏗️ Architecture

### Architecture Globale

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT (Browser)                       │
│                  Next.js Frontend (SSR/CSR)                │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP/WebSocket
         ┌───────────────┴──────────────┐
         │                              │
┌────────▼────────┐            ┌────────▼─────────┐
│  Next.js API    │            │  Server Actions  │
│  Routes         │            │  (Clerk hooks)   │
└────────┬────────┘            └────────┬─────────┘
         │                              │
         └───────────────┬──────────────┘
                         │
         ┌───────────────┴──────────────┐
         │                              │
┌────────▼────────┐            ┌────────▼─────────┐
│  Prisma ORM     │            │  Redis Cache     │
└────────┬────────┘            └────────┬─────────┘
         │                              │
         └───────────────┬──────────────┘
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
┌───▼───┐          ┌─────▼──┐          ┌────▼────┐
│ MySQL │          │ MinIO  │          │   SRS   │
│  DB   │          │Storage │          │ Streamer│
└───────┘          └────────┘          └─────────┘
    │                    │                    │
    └────────────────────┼────────────────────┘
                         │
         ┌───────────────┴──────────────┐
         │                              │
    ┌────▼────┐                  ┌─────▼──────┐
    │ Webhooks│                  │ LiveKit /  │
    │  (Svix) │                  │  External  │
    └─────────┘                  │  Services  │
                                 └────────────┘
```

### Flux de Streaming

```
┌──────────────┐      RTMP       ┌─────────┐      HLS      ┌──────────┐
│  Encodeur    │ ──────────────► │   SRS   │ ──────────────► │ Viewer  │
│  (OBS/ffmpeg)│ (rtmp://...)    │ Server  │ (HTTP stream)  │ Browser │
└──────────────┘                 └────┬────┘                └──────────┘
                                      │
                                 ┌────▼────┐
                                 │ HLS.js   │
                                 │ Player   │
                                 └──────────┘
```

### Flux du Chat

```
┌────────┐                    ┌──────────┐                   ┌─────────┐
│ Sender │ ─── WebSocket ───► │ Next.js  │ ─── Broadcast ─► │Receivers│
│ Client │ (socket.io/custom) │ Server   │ (all connected)  │ Clients │
└────────┘                    └──────────┘                   └─────────┘
                                    │
                                    ▼
                              ┌────────────┐
                              │ Prisma ORM │
                              │ (Save Chat)│
                              └────────────┘
```

## 📊 Modèle de Données

### Principales Entités

```prisma
User
├── id (UUID)
├── username (unique)
├── email
├── imageUrl
├── bio
├── followers (Follow)
├── following (Follow)
├── blockedUsers (Block)
├── blockingUsers (Block)
└── stream (Stream)

Stream
├── id (UUID)
├── name
├── thumbnailUrl
├── isLive
├── userId (FK)
├── isChatEnabled
├── isChatDelayed
├── isChatFollowersOnly
├── ingressId (RTMP)
├── serverUrl
└── streamKey

Follow
├── id
├── followerId (FK)
├── followingId (FK)
└── unique([followerId, followingId])

Block
├── id
├── blockerId (FK)
├── blockedId (FK)
└── unique([blockerId, blockedId])
```

## 📝 Scripts NPM

```bash
# Développement
npm run dev           # Démarrer le serveur de développement

# Production
npm run build         # Compiler pour la production
npm run start         # Démarrer le serveur production

# Quality Assurance
npm run lint          # Vérifier la syntaxe avec ESLint

# Base de Données
npx prisma studio    # Ouvrir Prisma Studio (UI BD)
npx prisma migrate   # Gérer les migrations
npx prisma generate  # Régénérer le client Prisma
```

## 🔌 API Endpoints Principaux

### Authentification

```
POST   /api/auth/sign-in          # Connexion
POST   /api/auth/sign-up          # Inscription
POST   /api/auth/logout           # Déconnexion
GET    /api/auth/verify           # Vérifier le token
```

### Utilisateurs

```
GET    /api/users/:username       # Récupérer profil utilisateur
PUT    /api/users/:id             # Mettre à jour profil
GET    /api/users/:id/streams     # Streams de l'utilisateur
```

### Streams

```
GET    /api/streams               # Lister tous les streams en direct
GET    /api/streams/:id           # Détails du stream
POST   /api/streams               # Créer un stream
PUT    /api/streams/:id           # Mettre à jour stream
DELETE /api/streams/:id           # Supprimer stream
POST   /api/streams/:id/go-live   # Aller en direct
POST   /api/streams/:id/end-live  # Terminer direct
```

### Chat

```
GET    /api/chat/messages/:streamId    # Historique chat
POST   /api/chat/messages              # Envoyer message
WS     /api/chat/stream/:streamId      # WebSocket chat
```

### Relation Utilisateurs

```
POST   /api/follow/:userId       # Suivre un utilisateur
DELETE /api/follow/:userId       # Arrêter de suivre
GET    /api/followers/:userId    # Lister followers
POST   /api/block/:userId        # Bloquer un utilisateur
DELETE /api/block/:userId        # Débloquer
```

### Fichiers

```
POST   /api/upload/avatar        # Upload avatar
POST   /api/upload/thumbnail     # Upload miniature
GET    /api/minio/presigned-url  # URL présignée MinIO
```

### Webhooks

```
POST   /api/webhooks/clerk       # Webhook Clerk
POST   /api/webhooks/svix        # Webhook Svix
```

## 🐳 Services Docker

### Services Disponibles

| Service           | Port             | Description                  |
| ----------------- | ---------------- | ---------------------------- |
| **Next.js App**   | 3000             | Application frontend/backend |
| **MySQL**         | 3306             | Base de données              |
| **Redis**         | 6379             | Cache en mémoire             |
| **MinIO**         | 9000             | Stockage objet (API)         |
| **MinIO Console** | 9001             | UI MinIO                     |
| **SRS Streaming** | 1935, 8080, 1985 | Serveur RTMP/HLS             |

### Commandes Utiles

```bash
# Voir les logs d'un service
docker-compose logs -f app

# Accéder à MySQL
docker-compose exec db mysql -u twitch_user -p twitch_clone

# Accéder à Redis
docker-compose exec redis redis-cli

# Redémarrer les services
docker-compose restart

# Arrêter tous les services
docker-compose down

# Arrêter et supprimer les volumes
docker-compose down -v
```

## ☸️ Déploiement Kubernetes

### Prérequis

- Cluster Kubernetes configuré
- kubectl installé et configuré
- ArgoCD installé dans le cluster

### Déployer avec Terraform

```bash
cd Terraform
terraform init
terraform plan
terraform apply
```

### Déployer avec ArgoCD

```bash
# Appliquer la configuration ArgoCD
kubectl apply -f argocd-app.yaml

# Voir le statut du déploiement
kubectl get applications

# Accéder à ArgoCD UI
kubectl port-forward svc/argocd-server 8080:443 -n argocd
```

### Manifestes Kubernetes

```bash
# Appliquer les manifestes directement
kubectl apply -f k8s/twitch-prod/

# Voir les déploiements
kubectl get deployments
kubectl get pods
kubectl get services
```

## 🔒 Sécurité

### Bonnes Pratiques Implémentées

1. **Variables d'Environnement** - Secrets stockés dans `.env.local`
2. **HTTPS en Production** - Certificats SSL/TLS via Kubernetes
3. **Authentification Clerk** - Gestion de sessions sécurisée
4. **Webhooks Validés** - Vérification des signatures Svix
5. **CORS Configuré** - Restrictions CORS pour les APIs
6. **Rate Limiting** - Protection contre les attaques brute-force
7. **Input Validation** - Validation côté serveur de tous les inputs
8. **Database Encryption** - Données sensibles chiffrées

### Checklist Avant Production

- [ ] Mettre à jour les secrets en production
- [ ] Configurer HTTPS/TLS
- [ ] Activer les backups BD
- [ ] Configurer le monitoring
- [ ] Mettre en place les alertes
- [ ] Tester la récupération après sinistre
- [ ] Auditer les accès
- [ ] Configurer WAF (Web Application Firewall)

## 🧪 Tests

```bash
# Lancer les tests unitaires
npm run test

# Lancer les tests d'intégration
npm run test:integration

# Lancer les tests de couverture
npm run test:coverage

# Mode watch
npm run test:watch
```

## 📈 Monitoring & Logging

### Services de Monitoring

- **Prometheus** - Métriques
- **Grafana** - Dashboards
- **Elasticsearch** - Logs
- **Kibana** - Visualisation logs

### Stack de Monitoring (k8s)

```bash
# Déployer le monitoring
kubectl apply -f k8s/monitoring/

# Accéder à Grafana
kubectl port-forward svc/grafana 3000:80 -n monitoring

# Accéder à Kibana
kubectl port-forward svc/kibana 5601:5601 -n monitoring
```

## 🐛 Troubleshooting

### La base de données ne se connecte pas

```bash
# Vérifier si MySQL est en cours d'exécution
docker-compose ps

# Voir les logs MySQL
docker-compose logs db

# Redémarrer le service
docker-compose restart db
```

### Erreur de connexion MinIO

```bash
# Vérifier les credentials MinIO
docker-compose logs minio

# Créer un bucket s'il n'existe pas
docker-compose exec minio mc mb minio/twitch-clone
```

### Problème de streaming RTMP

```bash
# Vérifier la configuration SRS
docker-compose logs srs

# Tester la connectivité RTMP
ffmpeg -f lavfi -i testsrc=duration=10:size=320x240:rate=30 \
  -f lavfi -i sine=frequency=1000:duration=10 \
  -c:v libx264 -preset ultrafast \
  -c:a aac -b:a 128k \
  -f flv rtmp://localhost:1935/live/test
```

### Le chat ne fonctionne pas

```bash
# Vérifier la connexion WebSocket
# Ouvrir la console du navigateur et chercher WebSocket errors

# Vérifier Redis
docker-compose exec redis redis-cli ping
```

## 📚 Documentation Additionnelle

- [Guide Docker](./DOCKER_SETUP.md) - Configuration Docker détaillée
- [Configuration Prisma](./prisma/schema.prisma) - Schéma de base de données
- [Configuration SRS](./srs.conf) - Serveur streaming RTMP/HLS
- [Infrastructure Terraform](./Terraform/README.md) - Infrastructure IaC
- [Kubernetes Manifests](./k8s/) - Déploiement K8s

## 🤝 Contribution

Les contributions sont bienvenues ! Veuillez :

1. Fork le projet
2. Créer une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Commiter vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pousser la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Conventions de Code

- Utiliser ESLint et Prettier
- TypeScript pour tout le code
- Composants fonctionnels avec hooks
- Tests unitaires pour les nouvelles features
- Commits sémantiques

## 📜 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 📧 Contact & Support

- **Issues** - Signaler un bug : [GitHub Issues](https://github.com/JuniorZ-spec/Twitch-Clone-Project/issues)
- **Discussions** - Questions générales : [GitHub Discussions](https://github.com/JuniorZ-spec/Twitch-Clone-Project/discussions)
- **Email** - [Votre email]
- **Website** - [Votre website]

## 🙏 Remerciements

Merci à tous les contributeurs et à la communauté open source pour les excellentes bibliothèques utilisées dans ce projet.

---

<div align="center">

**Fait avec ❤️ par la communauté**

⭐ N'oublie pas de mettre une étoile si ce projet t'a été utile !

[Retour en haut](#-twitch-clone---plateforme-de-streaming-en-direct)

</div>

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

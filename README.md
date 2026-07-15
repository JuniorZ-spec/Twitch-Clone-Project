<img width="1672" height="941" alt="ChatGPT Image 24 juin 2026, 16_26_18" src="https://github.com/user-attachments/assets/c2f82f2d-6a4e-4aa1-baf1-498e992db31a" />









# Twitch Clone



Twitch Clone est un prototype de plateforme de streaming en direct développé avec Next.js et TypeScript. Il illustre une architecture complète (frontend, backend, stockage d'objets, base de données, cache et streaming RTMP/HLS) et des intégrations courantes (authentification, uploads, webhooks).

Objectif pour un recruteur

- Comprendre rapidement la portée technique du projet, où regarder le code important et comment lancer l'application localement pour évaluer les compétences du candidat.

Fonctionnalités clés

- Gestion des utilisateurs (inscription, profil)
- Création et gestion de streams (clé/ingress, miniatures)
- Lecture vidéo HLS et contrôles (player adaptatif)
- Chat en temps réel (WebSocket)
- Uploads d'assets (minio / UploadThing)
- Intégration d'authentification (Clerk)

Architecture et points d'intérêt

- Frontend / Backend: `app/` (Next.js 13 App Router)
- Composants UI: `components/` (player, chat, UI primitives)
- Logique métier: `lib/` (services: `stream-service.ts`, `user-service.ts`, etc.)
- Persistance: `prisma/` (`schema.prisma`) et MySQL
- Stockage d'objets: MinIO (`public/` + `lib/minio.ts`)
- Infra & déploiement: `k8s/`, `Terraform/`, `docker-compose.yml`

Tech stack

- Frontend: Next.js 13, React, TypeScript
- API / Backend: Next.js API routes / server actions
- Database: MySQL via Prisma
- Cache: Redis
- Storage: MinIO
- Streaming: SRS / RTMP -> HLS

Comment lancer rapidement (recruteur / évaluateur)

1. Cloner le dépôt

```bash
git clone https://github.com/JuniorZ-spec/Twitch-Clone-Project.git
cd Twitch-Clone-Project
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env.local` à partir du modèle et renseigner les variables minimales (DB, Clerk, MinIO). Ne poussez pas de secrets.

4. Option Docker (recommandé pour évaluer rapidement)

```bash
docker-compose up -d
# puis
docker-compose logs -f app
```

5. Ou exécuter en local

```bash
npm run dev
```

Ce que regarder pour évaluer le code

- Pages / routes et middleware: `middleware.ts`, `app/api/` (sécurité, validation)
- Services métier: `lib/` (architecture, séparation des responsabilités)
- Composants UI réutilisables: `components/ui/`
- Tests (si présents) et scripts npm

Documentation additionnelle

- Docker: `DOCKER_SETUP.md`
- Infra: `Terraform/` et `k8s/`



<img width="946" height="473" alt="Capture d’écran 2026-06-22 133758" src="https://github.com/user-attachments/assets/fb93c2de-863a-4520-92b1-14124b11251a" />


<img width="960" height="479" alt="Capture d’écran 2026-06-24 102335" src="https://github.com/user-attachments/assets/0bf80e33-4aad-4567-91da-dd489a107677" />
<img width="960" height="480" alt="Capture d’écran 2026-06-24 113323" src="https://github.com/user-attachments/assets/899cce4b-28cc-4e38-a4fe-cc986a1c1c61" />



- MIT

---

Pour plus de détails (déploiement, Docker, infra), consultez les fichiers spécifiques du projet (`docker-compose.yml`, `k8s/`, `Terraform/`).

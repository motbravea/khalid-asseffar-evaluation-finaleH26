# Application Bibliothèque - Évaluation finale

## Description

Cette application web a été développée dans le cadre de l’évaluation finale du cours **Programmation Web avancée 420-WA6-AG**.

Le projet simule le fonctionnement d’une bibliothèque numérique. Il permet aux utilisateurs de consulter la liste des livres disponibles et de rechercher les livres qu’ils ont empruntés à partir de leur adresse courriel.

L’application est composée d’un frontend développé avec **React** et d’un backend développé avec **Node.js / Express**, connecté à une base de données **MySQL**.

## Fonctionnalités principales

- Affichage de la liste des livres disponibles.
- Recherche des emprunts par adresse courriel.
- Affichage du titre du livre, de l’auteur, de la date d’emprunt et de la date de retour.
- Communication entre le frontend React et le backend Express avec Axios.
- Connexion à une base de données MySQL.
- Documentation du projet avec README.
- Préparation au déploiement sur Railway, Render et Vercel.

## Technologies utilisées

- React
- Vite
- Node.js
- Express
- MySQL
- mysql2
- Axios
- React Router DOM
- CORS
- dotenv
- phpMyAdmin
- GitHub

## Structure du projet

```text
bibliotheque/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Livres.jsx
│   │   │   └── MesEmprunts.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── routes/
│   │   ├── livresRoutes.js
│   │   └── empruntsRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

## Installation du projet

### 1. Cloner le projet

```bash
git clone LIEN_DU_DEPOT_GITHUB
cd bibliotheque
```

### 2. Installer les dépendances du backend

```bash
cd server
npm install
```

### 3. Installer les dépendances du frontend

```bash
cd ../client
npm install
```

## Configuration de la base de données

La base de données utilisée dans ce projet s’appelle :

```text
bibliotheque
```

Elle contient les tables suivantes :

```text
livres
utilisateurs
emprunts
```

La base de données doit être importée dans **phpMyAdmin** à partir du fichier SQL fourni.

## Configuration du backend

Dans le dossier `server`, le fichier `.env` contient les informations de connexion à la base de données :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=bibliotheque
PORT=5000
```

Ces informations permettent au backend Express de se connecter à la base de données MySQL locale.

## Lancement du backend

Dans le dossier `server`, exécuter la commande suivante :

```bash
node server.js
```

Le backend fonctionne sur :

```text
http://localhost:5000
```

## Lancement du frontend

Dans le dossier `client`, exécuter la commande suivante :

```bash
npm run dev
```

Le frontend fonctionne sur :

```text
http://localhost:5173
```

## Routes de l’API

### Récupérer la liste des livres disponibles

```http
GET /api/livres
```

Exemple :

```text
http://localhost:5000/api/livres
```

Cette route permet de récupérer les livres disponibles dans la base de données.

### Récupérer les emprunts d’un utilisateur

```http
GET /api/emprunts?email=
```

Exemple :

```text
http://localhost:5000/api/emprunts?email=jean.dupont@biblio.com
```

Cette route permet de récupérer les livres empruntés par un utilisateur à partir de son adresse courriel.

## Utilisateurs de test

Deux utilisateurs sont utilisés pour tester l’affichage des emprunts :

```text
Jean Dupont
Email : jean.dupont@biblio.com
Mot de passe : 123456
```

```text
Sophie Martin
Email : sophie.martin@biblio.com
Mot de passe : 123456
```

## Tests effectués

Les tests réalisés dans le cadre de l’évaluation permettent de vérifier :

- Le bon fonctionnement du backend.
- La connexion à la base de données MySQL.
- L’affichage des livres disponibles.
- L’affichage des emprunts par utilisateur.
- Le fonctionnement du formulaire de recherche par email.
- La communication entre React et Express.

## Déploiement

Le déploiement prévu pour cette application est le suivant :

```text
Base de données : Railway
Backend Express : Render
Frontend React : Vercel
```

Après le déploiement, l’URL du backend déployé doit être ajoutée dans le frontend afin de remplacer l’URL locale :

```text
http://localhost:5000
```

par l’URL du backend Render.

## Liens du projet

Lien GitHub :

```text
À ajouter après la création du dépôt GitHub
```

Lien backend Render :

```text
À ajouter après le déploiement
```

Lien frontend Vercel :

```text
À ajouter après le déploiement
```

## Auteur

```text
Khalid Asseffar
```

## Conclusion

Ce projet permet de démontrer les compétences liées au développement d’une application web complète avec React, Express et MySQL. Il met en pratique la connexion entre un frontend et un backend, l’utilisation d’une base de données, la gestion des routes API, les tests, la documentation et le déploiement d’une application web.
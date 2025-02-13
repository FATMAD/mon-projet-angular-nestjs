📋 README - Projet Full-Stack : Angular, NestJS, MongoDB

🌟 Description

Ce projet full-stack permet d'importer des données depuis un fichier Excel, de les envoyer à un backend NestJS via un endpoint, puis de les stocker dans une base de données MongoDB. Il inclut également l'authentification via Google OAuth2 et Auth0 pour sécuriser les accès.

🛠️ Technologies utilisées

Frontend : Angular
Backend : NestJS
Base de données : MongoDB
Authentification : Google OAuth2, Auth0
Gestion des connexions : WebSocket (facultatif)
📥 Prérequis
Node.js (version 20)
MongoDB (si localement, ou MongoDB Atlas)
Google OAuth2 et Auth0 pour l'authentification


🚀 Lancer le projet

1️⃣ Frontend (Angular)

📦 Installation des dépendances

     cd frontend
     npm install
⚙️ Lancer le serveur Angular

npm run start 

Cela ouvrira l'application à l'adresse http://localhost:4200.

Fonctionnalités Frontend :
Importer un fichier Excel avec des données formatées (nom, date, prix, catégorie).
Afficher les données dans un tableau après l'import.
Envoyer les données au backend via un endpoint REST.



2️⃣ Backend (NestJS + MongoDB)
📦 Installation des dépendances

cd backend
npm install

⚙️ Lancer le serveur NestJS

npm run start:dev
Le serveur backend sera disponible à http://localhost:3000.

Fonctionnalités Backend :
Définir l'endpoint /kraken pour recevoir les données envoyées depuis le frontend.
Stocker les données dans MongoDB.
Authentification via Google OAuth2 et Auth0 pour sécuriser l'accès.

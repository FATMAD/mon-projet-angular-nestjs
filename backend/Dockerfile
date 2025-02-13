
# Utiliser une image Node.js comme base
FROM node:20.11.1

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application NestJS
CMD ["npm", "run", "start"]

# Étape 1 : Utiliser une image Node.js plus récente (v18 ou plus)
FROM node:18-slim as build

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json /app/

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le code source du frontend
COPY . /app/

# Étape 6 : Construire l'application Angular pour la production
RUN npm run build --prod

# Étape 7 : Utiliser Nginx pour servir l'application Angular
FROM nginx:alpine

# Étape 8 : Copier le build de l'application Angular dans le répertoire de Nginx
COPY --from=build /app/dist/client-keeper/ /usr/share/nginx/html

# Étape 9 : Exposer le port 80 pour Nginx
EXPOSE 80

# Étape 10 : Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]

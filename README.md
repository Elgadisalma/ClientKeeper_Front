
# ClientKeeper - Frontend

ClientKeeper est le frontend Angular pour le backend ClientKeeper, conçu pour gérer les opérations bancaires, sécuriser les données sensibles, et intégrer des fonctionnalités d'intelligence artificielle pour analyser le risque de churn et générer des offres personnalisées.

---

## **Table des matières**
1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Fonctionnalités](#fonctionnalités)
4. [Tests](#tests)

---

## **Prérequis**
Avant de démarrer, assurez-vous d’avoir installé les éléments suivants :

- [Node.js 16+](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [npm](https://www.npmjs.com/)
- [JWT Decode](https://www.npmjs.com/package/jwt-decode)

---

## **Installation**

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-repo/clientkeeper-frontend.git
   cd clientkeeper-frontend
   ```

2. **Installer les dépendances**
   Exécutez la commande suivante pour installer les dépendances nécessaires :
   ```bash
   npm install
   ```

3. **Installer jwt-decode**
   Pour décoder les tokens JWT, vous devez installer `jwt-decode` :
   ```bash
   npm install jwt-decode
   ```

4. **Démarrer l’application**
   Une fois toutes les dépendances installées, vous pouvez démarrer l'application Angular :
   ```bash
   ng serve
   ```

   L’application sera disponible à l’adresse : [http://localhost:4200](http://localhost:4200).

---

## **Fonctionnalités**

### **1. Gestion des clients**
- Ajouter, mettre à jour, supprimer et consulter les informations des clients.
- Gestion des statuts client (actif/inactif).

### **2. Gestion des transactions**
- Effectuer des dépôts et retraits.
- Consulter le solde et l’historique des transactions des clients.

### **3. Prédiction du churn**
- Analyse des données client pour identifier ceux à risque.
- Consommation de l'API Flask pour prédire le churn.

### **4. Authentification**
- Authentification basée sur JWT.
- Décodage et gestion des tokens JWT via le package `jwt-decode`.

---

## **Tests**

1. **Exécuter les tests unitaires**
   Pour exécuter les tests unitaires de l'application Angular, utilisez la commande suivante :
   ```bash
   ng test
   ```

2. **Vérifier la production du build**
   Pour vérifier la production de l'application en mode production :
   ```bash
   ng build --prod
   ```

---

**© 2025 ClientKeeper**

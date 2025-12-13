# 📦 API REST – Gestion des Produits

## 📖 Description du projet
Cette application est une **API REST simple** développée avec **Node.js et Express**.
Elle permet de gérer une liste de produits (CRUD) **sans base de données**. Les données sont stockées temporairement en mémoire.

Ce projet est idéal pour :
- Apprendre les bases d’une API REST
- Comprendre les méthodes HTTP (GET, POST, PUT, DELETE)
- Tester des requêtes avec Postman ou Thunder Client

---

## ⚙️ Technologies utilisées
- Node.js
- Express.js
- JavaScript

---

## 🚀 Lancer le projet

### 1️⃣ Prérequis
- Node.js installé

### 2️⃣ Installation
```bash
npm init -y
npm install express
```

### 3️⃣ Démarrage du serveur
```bash
node index.js
```

Le serveur démarre sur :
```
http://localhost:3000
```

---

## 📌 Base URL
```
http://localhost:3000/api/produits
```

---

## 📚 Endpoints de l’API

### 🔹 1. Récupérer tous les produits

**Méthode :** `GET`

**URL :**
```
/api/produits
```

**Réponse (200 OK) :**
```json
[
  { "id": 1, "nom": "tee-shirt", "prix": 10 },
  { "id": 2, "nom": "pull", "prix": 20 }
]
```

---

### 🔹 2. Ajouter un produit

**Méthode :** `POST`

**URL :**
```
/api/produits
```

**Body (JSON) :**
```json
{
  "nom": "casquette",
  "prix": 15
}
```

**Réponse (201 Created) :**
```json
{
  "id": 4,
  "nom": "casquette",
  "prix": 15
}
```

**Erreur possible (400) :**
```json
{
  "error": "Le champ nom est obligatoire"
}
```

---

### 🔹 3. Mettre à jour un produit

**Méthode :** `PUT`

**URL :**
```
/api/produits/:id
```

**Exemple :**
```
/api/produits/2
```

**Body (JSON) :**
```json
{
  "nom": "pull hiver",
  "prix": 25
}
```

**Réponse (200 OK) :**
```json
{
  "message": "Produit mis à jour",
  "produit": {
    "id": 2,
    "nom": "pull hiver",
    "prix": 25
  }
}
```

**Erreur (404) :**
```json
{
  "error": "Produit non trouvé"
}
```

---

### 🔹 4. Supprimer un produit

**Méthode :** `DELETE`

**URL :**
```
/api/produits/:id
```

**Exemple :**
```
/api/produits/3
```

**Réponse (200 OK) :**
```json
{
  "message": "Produit supprimé"
}
```

**Erreur (404) :**
```json
{
  "error": "Produit non trouvé"
}
```

---

## 🧪 Tests
Vous pouvez tester l’API avec :
- Postman
- Thunder Client (VS Code)
- curl

---

## ⚠️ Remarques importantes
- Les données sont **perdues au redémarrage du serveur**
- Projet pédagogique (sans base de données)

---

## 📌 Améliorations possibles
- Ajouter une base de données (MySQL, PostgreSQL)
- Ajouter une validation avancée
- Ajouter un middleware de gestion des erreurs
- Sécuriser l’API (authentification)

---

## 👨‍💻 Auteur
Projet pédagogique API REST avec Express.js


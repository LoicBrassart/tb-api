# Express 101

## Creation d'un projet backend

### Projet complet (git/TS), étape par étape:

- créer le dossier et rentrer dedans : `mkdir PROJECTNAME && cd PROJECTNAME`
- initialiser projet git: `git init`
- initialiser projet npm: `npm init -y`
- installer & initialiser TS: `npm i -D typescript tsx @types/node && npx tsc --init`
- créer notre premier fichier de code: `mkdir src/ && touch src/index.ts`

### Démarche simplifiée (JS) :

- créer le dossier et rentrer dedans : `mkdir PROJECTNAME && cd PROJECTNAME`
- initialiser projet npm: `npm init -y`
- créer notre premier fichier de code: `mkdir src/ && touch src/index.js`

## A retenir sur Express

### Installation

- installer: `npm i express`
- _si TS_, ajouter les types: `npm i -D @types/express`

### Utilisation

Fichier minimaliste avec commentaires:

```js
import express from "express";

// Initialiser Express
const app = express();

// Déclarer une route
// - choisir quelle requête (verbe+url) déclenche la route. Ex: GET "/"
// - ecrire ce qui doit être fait. Ex: Répondre "Hello world!"
// - req permet d'examiner la requête
// - res permet de manipuler la réponse
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log(`API available on http://localhost:3000 !`);
});
```

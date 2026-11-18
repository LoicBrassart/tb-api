// récupérer la librairie Express
import express from "express";

// créer mon application avec une config minimale
const app = express();

// créer une route: "Si je reçois un GET sur "/", j'exécute la fonction associée
app.get("/", (req, res) => {
  console.log("Cuhis la !");
  res.send("OK");
});

// mon app doit ecouter le port 3000
app.listen(3000, () => {
  console.log("API available !");
});

// 127.0.0.1 = "chez moi" =  "localhost"
// localhost
// 127.0.0.1:1

// - :5173 front react
// - :3000 back express
// - :8686 bdd postgresql

// Ecrire une fonction
//   function toto() {}
//   const toto = ()=>{}

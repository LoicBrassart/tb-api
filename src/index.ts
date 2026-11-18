import express from "express";
// récupérer personnages depuis le fichier JSON
import { characters } from "./fake.json";

const app = express();

// On écrit le type Character
type Character = {
  id: number;
  name: string;
  tier: string;
  weapon: string | null;
  attribute: string | null;
  species: string | null;
  lambdaForm: number | null;
  originalForm: number | null;
  gender: string;
  artist: any;
  availability: string[];
  jobNames: any;
  japaneseName: string;
  versionAdded: string | null;
};

// ajouter, modifier, suppriomer, lire/recuperer
// CRUD: Create, Read, Update, Delete

// Sur GET /characters : renvoyer tous les persos
app.get("/characters", (req, res) => {
  const results = characters.map((char: Character) => {
    return {
      id: char.id,
      name: char.name,
    };
  });
  res.json(results);
});

// Sur GET /characters/1 : renvoyer le perso n°1
app.get("/characters/1", (req, res) => {
  const results = characters.filter((char: Character) => {
    return char.id === 1;
  });
  res.json(results);
});

app.listen(3000, () => {
  console.log("API available !");
});

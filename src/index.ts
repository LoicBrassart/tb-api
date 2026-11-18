import express from "express";
import cors from "cors";
import { characters } from "./fake.json";

const app = express();
app.use(cors());

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
  artist: string | null;
  availability: string[];
  jobNames: any;
  japaneseName: string;
  versionAdded: string | null;
};

app.get("/characters", (req, res) => {
  const results = characters.map((char: Character) => {
    return {
      id: char.id,
      name: char.name,
    };
  });
  res.json(results);
});

// :machin === parametre de route nommé "machin"
app.get("/characters/:id", (req, res) => {
  const results = characters.filter((char: Character) => {
    // req.params.id = valeur de "machin"
    return char.id === Number(req.params.id);
  });
  res.json(results[0]);
});

app.listen(3000, () => {
  console.log("API available !");
});

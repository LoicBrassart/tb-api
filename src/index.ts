import express from "express";

const app = express();
const PORT = 3000;

app.get("/pokemon", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Moumouton",
      type: "Normal",
      imgUrl: "monsite.com/dsfgdsfgd.jpg",
    },
    {
      id: 2,
      name: "Ectoplasma",
      type: "Spectre",
    },
    {
      id: 3,
      name: "Carapuce",
      type: "Eau",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});

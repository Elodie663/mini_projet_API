import express from "express";
const app = express();
const port = 3000;

//pour accepter les fichiers JSON
app.use(express.json());

//je crée mon tableau d'objets
let livres = [
  {
    id: 1,
    titre: "L'histoire d'un point virgule et d'un dollar en fuite",
    auteur: "Elodie Molieres",
  },
  { id: 2, titre: "PHP, mon amour", auteur: "anonyme" },
  {
    id: 3,
    titre: "Le retour des console.log",
    auteur: "Un apprenant de Beweb",
  },
];

//GET pour récupérer tous les livre
app.get("/livres", (req, res) => {
  if (livres.length === 0) {
    return res.status(400).json({ message: "Pas de livre disponible" });
  }
  return res.status(200).json(livres);
});

//méthode POST ajouter un livre

app.post("/livres", (req, res) => {
  const livre = livres.find((l) => l.id == req.body.id);
  //d'abord je vérifie si le livre existe déjà par son ID
  if (livre) {
    return res.status(400).json({ message: "le livre existe déjà" });
  }
  //si non, j'utilise la méthode push pour ajoutre le livre au tableau
  let newLivre = req.body;
  livres.push(newLivre);
  return res
    .status(201)
    .json({ message: "Livre créé avec succès", livre: newLivre });
});

//méthode delete pour supprimer un objet par son ID

app.delete("/livres/:id", (req, res) => {
  //penser à ajouter l'id pour la route
  const livre = livres.find((l) => l.id == req.params.id);
  if (!livre) {
    return res.status(404).json({ message: "livre introuvable" });
  }
  const indexOf = livres.indexOf(livre);
  livres.splice(indexOf, 1);
  return res.status(200).json({ message: "livre supprimé avec succès" });
});

//méthode PUT modifier un livre par son ID
app.put("/livres/:id", (req, res) => {
  const livre = livres.find((l) => l.id == req.params.id);
  if (!livre) {
    return res.status(404).json({ message: "Livre introuvale" });
  }
  //modifier les propriétés d'un livre
  livre.titre = req.body.titre || livre.titre;
  livre.auteur = req.body.auteur || livre.auteur;

  return res.status(200).json({ message: "Livre mis à jour" });
});

//pour listen le port 3000
app.listen(port, () => {
  console.log(`Serveur en marche sur le port ${port}`);
});

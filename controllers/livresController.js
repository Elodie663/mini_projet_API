import {
  getAllLivres,
  addLivre,
  deleteLivre,
  modifierLivre,
  getLivreById,
} from "../models/livres.js";

//méthode GET pour récupérer tous les livres
export function getAllLivresController(req, res) {
  const allLivres = getAllLivres();
  return res.status(200).json(allLivres);
}

//méthode pour retrouver un livre par son id
export function getLivreByIdController(req, res) {
  const livre = getLivreById(req.params.id);
  if (!livre) {
    return res.status(404).json({ message: "Livre introuvable" });
  }
  return res.status(200).json(livre);
}

//méthode post pour ajouter un livre
export function postAddLivreController(req, res) {
  const { id, titre, auteur } = req.body;
  const newLivre = addLivre(id, titre, auteur);

  // Si null, c'est que le livre existe déjà
  if (!newLivre) {
    return res.status(400).json({
      message: "Le livre existe déjà",
    });
  }

  return res.status(201).json({
    message: "Livre créé avec succès",
    livre: newLivre,
  });
}

//méthode delete pour supprression
export function deleteLivreController(req, res) {
  const livre = deleteLivre(req.params.id);

  if (!livre) {
    return res.status(404).json({ message: "livre introuvable" });
  }
  console.log("......................................");
  console.log(livre);
  console.log("......................................");

  return res.status(200).json({ message: "livre supprimé avec succès" });
}

//méthode PUT pour mettre à jour

export function modifierLivreController(req, res) {
  const id = req.params.id;
  const updatedLivre = modifierLivre(id, req.body);
  console.log("----------'''''''''''''''''''-");
  console.log(updatedLivre);
  console.log("----------'''''''''''''''''''-");
  if (!updatedLivre) {
    return res.status(404).json({ message: "Livre introuvable controller" });
  }
  return res
    .status(200)
    .json({ message: "Livre mis à jour", livre: updatedLivre });
}

// const { id, titre, auteur } = req.body;
// const newLivre = addLivre(id, titre, auteur);

import {
  getAllLivres,
  addLivre,
  deleteLivre,
  modifierLivre,
  getLivreById,
} from "../models/livres.js";

//méthode GET pour récupérer tous les livres
export async function getAllLivresController(req, res) {
  try {
    const allLivres = await getAllLivres();
    return res.status(200).json(allLivres);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//remplacement de méthode post pour ajouter un livre : ajout async, await, try catch et plus besoin du if, plusd d'id
export async function postAddLivreController(req, res) {
  try {
    const { titre, auteur } = req.body;
    const newLivre = await addLivre(titre, auteur);
    return res.status(201).json({
      message: "Livre créé avec succès",
      livre: newLivre,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//modificartion de la méthode pour retrouver un livre par son id
export async function getLivreByIdController(req, res) {
  const id = req.params.id; //je lui donne l'id passé en paramètre
  try {
    const livre = await getLivreById(id); //j'attends la réponse de la BDD
    if (!livre) {
      return res.status(404).json({ message: "Livre introuvable" });
    }
    return res.status(200).json(livre); //je renvoie le livre trouvé
  } catch (error) {
    //gestion des erreurs
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//modification de la méthode delete pour supprression avec la méthode mongoose deleteOne
export async function deleteLivreController(req, res) {
  const id = req.params.id;
  try {
    const livreSupprime = await deleteLivre(id);
    if (!livreSupprime) {
      return res.status(404).json({ message: "livre introuvable" });
    }
    return res.status(200).json({ message: "livre supprimé avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

//modification méthode PUT pour mettre à jour avec mongoose findOneAndUpdate

export async function modifierLivreController(req, res) {
  const id = req.params.id;
  try {
    const updatedLivre = await modifierLivre(id, req.body);

    if (!updatedLivre) {
      return res.status(404).json({ message: "Livre introuvable controller" });
    }
    return res
      .status(200)
      .json({ message: "Livre mis à jour", livre: updatedLivre });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

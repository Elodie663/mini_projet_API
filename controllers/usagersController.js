import { getAllUsagers, addUsager, getUsagerById } from "../models/usagers.js";

export async function getAllUsagersController(req, res) {
  try {
    const allUsagers = await getAllUsagers();
    return res.status(200).json(allUsagers);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

export async function postAddUsagerController(req, res) {
  try {
    const { nom, prenom, email, password } = req.body;
    const newUsager = await addUsager(nom, prenom, email, password);
    if (!newUsager) {
      return res.status(400).json({
        message: "L'adresse mail existe déjà ou le mot de passe est invalide",
      });
    }
    return res.status(201).json({
      message: "Usager créé avec succès",
      usager: newUsager,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

export async function getUsagerByIdController(req, res) {
  try {
    const usager = await getUsagerById(req.params.id);
    if (!usager) {
      return res.status(404).json({ message: "Usager introuvable" });
    }
    return res.status(200).json(usager);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

import {
  getAllUsagers,
  addUsager,
  getUsagerById,
  passwordVerify,
} from "../models/usagers.js";

export function getAllUsagersController(req, res) {
  const allUsagers = getAllUsagers();
  return res.status(200).json(allUsagers);
}

export function postAddUsagerController(req, res) {
  const { id, nom, prenom, email, password } = req.body;
  const newUsager = addUsager(id, nom, prenom, email, password);

  if (!newUsager) {
    return res.status(400).json({
      message: "L'adresse mail existe déjà ou le mot de passe est invalide",
    });
  }

  return res.status(201).json({
    message: "Usager créé avec succès",
    usager: newUsager,
  });
}

export function getUsagerByIdController(req, res) {
  const usager = getUsagerById(req.params.id);
  if (!usager) {
    return res.status(404).json({ message: "Usager introuvable" });
  }
  return res.status(200).json(usager);
}

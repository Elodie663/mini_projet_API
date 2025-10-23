import { addUsager, loginUsager } from "../models/usagers.js";

export function registerController(req, res) {
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

export function loginController(req, res) {
  const { email, password } = req.body;

  const usager = loginUsager(email, password);

  if (!usager) {
    return res.status(401).json({
      message: "Email ou mot de passe incorrect",
    });
  }

  return res.status(200).json({
    message: "Connexion réussie",
    usager: usager,
  });
}

import { addUsager, loginUsager } from "../models/usagers.js";

export async function registerController(req, res) {
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

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const usager = await loginUsager(email, password);
    if (!usager) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect",
      });
    }
    return res.status(200).json({
      message: "Connexion réussie",
      usager: usager,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", erreur: error.message });
  }
}

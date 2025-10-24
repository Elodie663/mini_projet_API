//  Supppression du tableau avec les données
import mongoose from "mongoose";

const livreSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
  },
  { timestamps: true }
);
//The timestamps option tells Mongoose to assign createdAt and updatedAt fields
// to your schema. The type assigned is Date = ajoute date et heure de création dans la BDD

export const Livre = mongoose.model("Livre", livreSchema);

//on crée des fonctions assychrones car communication avec la BDD

export async function getAllLivres() {
  return await Livre.find();
}

//fonction pour ajouter un livre modifiée en assynchrone, plus de méthode push
export async function addLivre(titre, auteur) {
  const newLivre = new Livre({ titre, auteur });
  return await newLivre.save();
}

//fonction pour retrrouver un livre par son id : utilisation de la fonction mongoose findOne
export async function getLivreById(id) {
  return await Livre.findOne({ _id: id });
}

//fonction pour supprimer un livre, essaie avec la méthode mongoose delete
export async function deleteLivre(id) {
  return await Livre.findByIdAndDelete(id);
}

//modification de la fonction pour modifier un livre avec la méthode mongoose findByIdAndUpdate
export async function modifierLivre(id, livreData) {
  return await Livre.findByIdAndUpdate(id, livreData, { new: true });
}

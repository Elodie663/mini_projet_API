//  Tableau avec les données
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
// console.log(livres);
// Fonction pour récupérer tous les livres
export function getAllLivres() {
  return livres;
}

//fonction pour ajouter un livre
export function addLivre(id, titre, auteur) {
  // vérifier si l'ID existe déjà
  const livreExiste = livres.find((l) => l.id == id);
  if (livreExiste) {
    return null; // Retourne null si le livre existe déjà
  }

  const newLivre = {
    id,
    titre,
    auteur,
  };

  livres.push(newLivre);
  return newLivre;
}

//fonction pour retrrouver un livre par son id
export function getLivreById(id) {
  return livres.find((l) => l.id == id);
}

//fonction pour supprimer un livre
export function deleteLivre(id) {
  const livre = livres.find((l) => l.id == id);
  if (!livre) {
    return false;
  }
  // console / log("----------------------------------------------");
  // console.log(livre);
  // console / log("----------------------------------------------");
  const indexOf = livres.indexOf(livre);
  livres.splice(indexOf, 1);
  return livre; // Retourne le livre supprimé
}

//fonction pour modifier un livre
export function modifierLivre(id, livreData) {
  const livre = livres.find((l) => l.id == id);
  if (!livre) {
    return false;
    //  res.status(404).json({ message: "Livre introuvable model" });
  }
  //modifier les propriétés d'un livre
  livre.id = livreData.id || livre.id;
  livre.auteur = livreData.auteur || livre.auteur;
  livre.titre = livreData.titre || livre.titre;

  return livreData;

  // return res.status(200).json({ message: "Livre mis à jour" });
}

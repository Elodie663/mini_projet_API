let usagers = [
  {
    id: 1,
    nom: "Molieres",
    prenom: "Elodie",
    email: "elodie@test.fr",
    password: "123",
  },
  {
    id: 2,
    nom: "Bali",
    prenom: "Eszter",
    email: "eszter@test.fr",
    password: "456",
  },
];

export function getAllUsagers() {
  return usagers;
}

export function passwordVerify(password) {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return passwordRegex.test(password);
}

export function addUsager(id, nom, prenom, email, password) {
  if (!passwordVerify(password)) {
    return null;
  }

  const emailExiste = usagers.find((u) => u.email === email);
  console.log("--------------------------------------");
  console.log(emailExiste);
  console.log("--------------------------------------");
  if (emailExiste) {
    return null;
  }

  const newUsager = {
    id,
    nom,
    prenom,
    email,
    password,
  };
  usagers.push(newUsager);
  console.log("Usager ajouté avec succès:", newUsager);
  console.log("Nombre total d'usagers:", usagers.length);
  return newUsager;
}

export function getUsagerById(id) {
  return usagers.find((u) => u.id == id);
}
export function loginUsager(email, password) {
  const usager = usagers.find((u) => u.email === email);
  if (!usager) {
    return null;
  }
  if (usager.password !== password) {
    return null;
  }
  return usager;
}

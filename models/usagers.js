import mongoose from "mongoose";

const usagerSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Usager = mongoose.model("Usager", usagerSchema);

export function passwordVerify(password) {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return passwordRegex.test(password);
}

export async function getAllUsagers() {
  return await Usager.find();
}

export async function addUsager(nom, prenom, email, password) {
  if (!passwordVerify(password)) {
    return null;
  }
  const emailExiste = await Usager.findOne({ email });
  if (emailExiste) {
    return null;
  }
  const newUsager = new Usager({ nom, prenom, email, password });
  return await newUsager.save();
}
export async function getUsagerById(id) {
  return await Usager.findById(id);
}
export async function loginUsager(email, password) {
  const usager = await Usager.findOne({ email });
  if (!usager) {
    return null;
  }
  if (usager.password !== password) {
    return null;
  }
  return usager;
}

import mongoose from "mongoose"; //import de mongoose
import dotenv from "dotenv"; //import dotenv

dotenv.config(); //charge les variables du fichier .env

export const connectDB = async () => {
  //function assynchrone de connexion
  try {
    await mongoose.connect(process.env.MONGODB_URI); //connexsion via l'uri
    console.log("MongoDB connecté avec succès");
  } catch (error) {
    console.error("Erreur de connexion", error); //ou affichage de l'erreur
    process.exit(1);
  }
};

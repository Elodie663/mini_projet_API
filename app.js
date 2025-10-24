import express from "express";
import dotenv from "dotenv"; //ajout de l'import dotenv
import { connectDB } from "./config/database.js"; //ajout de la connexion BDD
import livresRoute from "./routes/livresRoute.js";
import usagersRoute from "./routes/usagersRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config(); //chargement des variables du finchier .env
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000; //cherche le port dans le fichier .env sinon utilise le port par défaut 3000

connectDB();

app.use(express.json());

app.use("/livres", livresRoute);
app.use("/usagers", usagersRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Serveur en marche sur le port ${port}`);
});

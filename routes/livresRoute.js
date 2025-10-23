import { Router } from "express";
import {
  getAllLivresController,
  getLivreByIdController,
  postAddLivreController,
  deleteLivreController,
  modifierLivreController,
} from "../controllers/livresController.js";

const router = Router();

router.get("/", getAllLivresController);
router.get("/:id", getLivreByIdController);
router.post("/", postAddLivreController);
router.delete("/:id", deleteLivreController);

export default router;

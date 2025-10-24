import { Router } from "express";
import {
  getAllUsagersController,
  getUsagerByIdController,
} from "../controllers/usagersController.js";

const router = Router();

router.get("/", getAllUsagersController);
router.get("/:id", getUsagerByIdController);

export default router;

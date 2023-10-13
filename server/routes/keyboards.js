import express from "express";
import KeebsController from "../controllers/keyboards.js";

const router = express.Router();

router.get("/", KeebsController.getAllKeebs);
router.get("/:id", KeebsController.getKeebsById);
router.post("/", KeebsController.createCustomKeeb);

export default router;

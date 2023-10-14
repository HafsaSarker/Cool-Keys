import express from "express";
import KeebsController from "../controllers/keyboards.js";

const router = express.Router();

router.get("/", KeebsController.getAllKeebs);
router.get("/:id", KeebsController.getKeebsById);
router.post("/create", KeebsController.createCustomKeeb);
router.delete("/:id", KeebsController.deleteKeeb);
router.patch("/:id", KeebsController.updateKeeb);

export default router;

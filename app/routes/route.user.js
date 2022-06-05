import express from "express";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/controller.users.js";

const router = express.Router();

// CRUD

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", createOne);

router.put("/", updateOne);

router.delete("/:id", deleteOne);

export default router;

import express from "express";
import {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getOneUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

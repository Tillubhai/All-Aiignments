import express from "express";
import { Register, Login } from "../controllers/userController.js";
const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);

export default router;

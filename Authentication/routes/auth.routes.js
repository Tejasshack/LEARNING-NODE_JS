import { Router } from "express";
import { dologin, register, protectedway } from "../controller/authcontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", dologin);
router.get("/protected", authMiddleware, protectedway);

export default router;

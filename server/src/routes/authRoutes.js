import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";

const router = express.Router();

// @Register POST /api/auth/register
// @desc Used to register user
router.post("/register", registerUser);

// @Login POST /api/auth/login
// @desc Used to login user
router.post("/login", loginUser);

export default router;

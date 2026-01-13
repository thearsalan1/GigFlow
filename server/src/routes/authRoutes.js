import express from "express";
import {
  loginUser,
  logout,
  registerUser,
} from "../controller/authController.js";

const router = express.Router();

// @Register POST /api/auth/register
// @desc Used to register user
router.post("/register", registerUser);

// @Login POST /api/auth/login
// @desc Used to login user
router.post("/login", loginUser);

// @Logout POST /api/auth/logout
// @desc Used to logout the user
router.post("/logout", logout);

export default router;

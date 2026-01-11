import express from "express";
import { createGig, getOpenGigs } from "../controller/gigController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// @Create Gigs POST /api/gig
// @desc Used to create new gigs
router.post("/", protect, createGig);

// @Get Gigs GET /api/gig
// @desc Get gigs feed to logged-in users
router.get("/", protect, getOpenGigs);

export default router;

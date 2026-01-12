import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createBid,
  getBidsForGig,
  hiredBid,
} from "../Controller/bidController.js";

const router = express.Router();

// @CreateBid POST /api/bid/
// @desc USed to create bid
router.post("/", protect, createBid);

// @GetBid GET /api/bid/:gigId
// @desc used to get bid using gigId
router.get("/:gigId", protect, getBidsForGig);

// @hier PATCH /api/bid/:gigId/hire
// @desc used to hier gig and reject all other bids
router.patch("/:bidId/hire", protect, hiredBid);

export default router;

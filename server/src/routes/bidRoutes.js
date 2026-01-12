import express from 'express'
import protect from '../middleware/authMiddleware.js'
import { createBid, getBidsForGig } from '../Controller/bidController.js';

const router = express.Router();

// @CreateBid POST /api/bid/
// @desc USed to create bid
router.post("/",protect,createBid);

// @GetBid GET /api/bid/:gigId
// @desc used to get bid using gigId
router.get("/:gigId",protect,getBidsForGig)

export default router;

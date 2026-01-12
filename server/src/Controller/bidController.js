import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";

export const createBid = async (req, res) => {
  try {
    const { gigId, message, price } = req.body;

    if (!gigId || !message || !price) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const gig = await Gig.findById(gigId);
    if (!gig) {
      return res.status(400).json({ success: false, message: "Gig not found" });
    }
    if (gig.status !== "open") {
      return res
        .status(404)
        .json({ success: false, message: "Gig is no longer open" });
    }

    if (gig.ownerId.toString() === req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "You can't bid on your own gig" });
    }

    const existBid = await Bid.findOne({
      gigId,
      freelancerId: req.user._id,
    });

    if (existBid) {
      return res
        .status(400)
        .json({ success: false, message: "You have already bid on this gig" });
    }

    const bid = await Bid.create({
      gigId,
      freelancerId: req.user._id,
      message,
      price,
    });

    res.status(201).json({
      success: true,
      message: "Bid submitted successfully",
      Bid,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getBidsForGig = async (req, res) => {
  try {
    const {gigId} = req.params;
    console.log(gigId);

    if (!gigId) {
      return res.status(400).json({
        success: false,
        messahe: "Gig not found",
      });
    }
    const gig = await Gig.findById(gigId);
    if (!gig) {
      return res.status(400).json({
        success: false,
        message: "Gig not found",
      });
    }

    if (gig.ownerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not Authorized",
      });
    }
    const bids = await Bid.find({ gigId })
      .populate("freelancerId", "name email")
      .sort({ createAt: -1 });

    res.status(200).json({
      success: true,
      bids,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

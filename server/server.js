import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import gigRoutes from "./src/routes/gigRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  return res.json({ success: true, message: "Serve is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at port : http://localhost:${PORT}`);
});

import express from "express";
import authRoutes from "./src/routes/auth.route.js";
import { connectDB } from "./src/lib/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json()); 

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT} `);
  connectDB();
});

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(bodyParser.json());

const port = 5000;
const Mongo_URL = "mongodb://localhost:27017/jwt_auth_demo";

// Routes
app.use("/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(Mongo_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error in connection: " + err));

app.listen(port, () => {
  console.log("🚀 Server running on port: " + port);
});

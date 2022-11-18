import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import regRoute from "./routes/auth.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection Succesful"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", regRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

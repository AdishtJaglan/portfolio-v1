import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => {
    console.log("Database connected and running.");
  })
  .catch((e) => {
    console.log("Error connecting to the database.");
  });

app.use(cors());
app.use(express.json());

app.post("/send-message", (req, res) => {});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

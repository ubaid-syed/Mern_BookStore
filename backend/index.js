import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";
const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Route is working");
});

app.use("/books", booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`Server is started on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

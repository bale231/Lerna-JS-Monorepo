import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen((err) => {
  if (err) {
    console.error(err);
    console.log(`Error: ${err.message}`);
  }

  console.log(`Listening on port ${process.env.PORT}`);
});

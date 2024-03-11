import express from "express";
import mongoose from "mongoose";
import routes from "../ContactService/routes/route.js";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/ContactManagerDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });

const port = 9000 || process.env.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import routes from "./routes/user.js";
import logger from "morgan";
import { Sequelize } from "sequelize";

const app = express();

const sequelize = new Sequelize("contactsDb", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully");
  } catch (err) {
    console.log(err);
  }
})();

app.use(logger("dev"));
app.use(express.json());
app.use("/auth", routes);

const port = 8000 || process.env.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

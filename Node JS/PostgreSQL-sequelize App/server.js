import express from "express";
import { Sequelize } from "sequelize";
import customer from "./models/Customers";

const app = express();
app.use(express.json());

const sequelize = new Sequelize("customerdb", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Established Succesfully");
  } catch (err) {
    console.log(err);
  }
})();

app.listen(9000, () => {
  console.log("Hi the Server has started");
});

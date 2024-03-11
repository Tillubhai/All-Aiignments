import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("customerdb", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

const customer = sequelize.createSchema("customers", {
  customerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
})();

export default customer;

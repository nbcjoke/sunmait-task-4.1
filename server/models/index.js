const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:123456@localhost:5433/discover`,
  { dialect: "postgres" }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user-model")(sequelize, DataTypes);

module.exports = db;

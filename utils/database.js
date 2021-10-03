const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo", "postgres", "1070", {
    dialect: "postgresql",
    host: "localhost",
});

module.exports = sequelize;

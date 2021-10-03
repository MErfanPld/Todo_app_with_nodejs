const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Todo = sequelize.define("Todo", {
    //? Model attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true, //? default is true,
    },
});

module.exports = Todo;

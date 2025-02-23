import { DataTypes } from "sequelize"
import { sequelize } from "../connDB.js";
// const sequelize = new Sequelize('sqlite::memory:');

export const User = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false, unique: true
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        timestamps: true
    },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true


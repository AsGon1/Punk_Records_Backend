import { DataTypes } from "sequelize";
import connection from "../config/db.js";


// MODELO DE LAS REVIEWS DE LOS USUARIOS
const Review = connection.define("reviews",{
    review_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique:true
    },
    rating: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    review: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    favorite_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})

export default Review;
import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Favorite from "./favorites.js"


// MODELO DE LOS USUARIOS
const User = connection.define("users",{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique:true
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    user_img: {
        type: DataTypes.STRING(128),
    }
})

User.hasMany(Favorite, { foreignKey: 'user_id' });
Favorite.belongsTo(User, { foreignKey: 'user_id' });

export default User;
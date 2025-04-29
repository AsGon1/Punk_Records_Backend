import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Review from "./review.js";


// MODELO DE LOS FAVORITOS DE CADA USUARIO
const Favorite = connection.define("favorites",{
    favorite_id: { //ID deentro de la base de datos
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique:true
    },
    media_name: { //Nombre del elemento que se ha introducido en favoritos
        type: DataTypes.STRING(256),
        allowNull: false
    },
    media_id: { // ID del elemento en la API de Anilist, necesario para hacer la busqueda en frontend
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    media_type: { // Tipo del elemento, principalmente se divide en dos Anime y Manga, pero existe otros subtipos en la API
        type: DataTypes.STRING(45),
        allowNull: false
    },
    finished: { // Dato que indica si el usuario ha terminado o no el elemnto, equivalente a visto o leido, necesario que sea true para hacer reviews
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    user_id: { // ID del usuario, asocia el foavorito al usuario
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    }
})

Favorite.hasMany(Review, { foreignKey: 'favorite_id' });
Review.belongsTo(Favorite, { foreignKey: 'favorite_id' });

export default Favorite;
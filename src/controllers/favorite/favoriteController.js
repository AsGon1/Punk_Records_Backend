import User from "../../models/user.js";
import Favorite from "../../models/favorite.js";
import {  } from "../../utils/errors.js";

// FUNCION QUE OBTIENE TODOS LOS FAVORITOS DEL USUARIO
async function getAllUserFavorites(id) {

    const filter = {include: [User]};
    filter.where = {user_id: id};
    const favorites = await Favorite.findAll(filter);
    return favorites;

}

// FUNCION PARA OBTENER EL FAVORITO POR ID
async function getByID(id) {

    const favorite = await Favorite.findByPk(id, {
        include: [User]
    });

    return favorite;

}

// FUNCION PARA OBTENER EL FAVORITO POR ID DE LA API EXTERNA
async function getByMediaID(media_id, user_id) {

    const filter = {/* include: [User] */};
    filter.where = {
        media_id: media_id,
        user_id: user_id
    };

    const favorite = await Favorite.findOne(filter);

    return favorite;

}

// FUNCION PARA CREAR EL FAVORITO
async function create(data) {

    const response = await Favorite.create(data);
    return response;

}

// FUNCION PARA EDITAR EL FAVORITO
async function edit(id, data){

    const result = await Favorite.update(
        data,
        {
            where:{
                favorite_id: id
            }
        }
    );

    return result;

}

// FUNCION PARA EDITAR UN FAVORITO POR SU ID EN LA API EXTERNA
async function editByMediaID(media_id, data){

    const result = await Favorite.update(
        data,
        {
            where:{
                media_id: media_id
            }
        }
    );

    return result;

}

// FUNCION PARA ELIMINAR EL FAVORITO
async function remove(id){

    const result = await Favorite.findByPk(id);
    result.destroy();

}

// FUNCION PARA ELIMINAR EL FAVORITO EL ID DE LA API EXTERNA
async function removeByMediaID(media_id, user_id){

    const result = await Favorite.findOne({ where: { media_id: media_id, user_id: user_id} });
    result.destroy();

}

export default{
    getAllUserFavorites,
    getByID,
    getByMediaID,
    create,
    edit,
    editByMediaID,
    remove,
    removeByMediaID
}
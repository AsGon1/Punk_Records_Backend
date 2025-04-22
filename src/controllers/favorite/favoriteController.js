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

// FUNCION PARA CREAR EL FAVORITO
async function create(data) {

    const response = await Favorite.create(data);
    return response;

}

// FUNCION PARA EDITAR EL FAVORITO (SOLO SE PODRA EDITAR SI SE HA TERMINADO O NO)
async function edit(media_id, data){

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
async function remove(media_id){

    const result = await Favorite.findOne({ where: { media_id: media_id } });
    result.destroy();

}

export default{
    getAllUserFavorites,
    create,
    edit,
    remove
}
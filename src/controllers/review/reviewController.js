import User from "../../models/user.js";
import Favorite from "../../models/favorite.js";
import Review from "../../models/review.js";
import { RatingNotProvided, ReviewNotProvided } from "../../utils/errors.js";

// FUNCION QUE OBTIENE TODAS LAS REVIEWS DEL USUARIO
async function getAllUserReviews(id) {

    const filter = {include: [User, Review]};
    filter.where = {user_id: id};
    const reviews = await Favorite.findAll(filter);
    return reviews;

}

// FUNCION PARA OBTENER LA REVIEW POR ID
async function getByID(id) {

    const review = await Review.findByPk(id, {
        include: [User, Favorite]
    });

    return review;

}

// FUNCION PARA OBTENER LAS REVIEWS POR ID DEL FAVORITO
async function getByFavoriteID(favorite_id) {

    const filter = {include: [User, Favorite]};
    filter.where = {favorite_id: favorite_id};

    const review = await Review.findOne(filter);

    return review;

}

// FUNCION PARA OBTENER LAS REVIEWS DE TODOS LOS USUARIOS POR ID DE LA API EXTERNA
async function getByMediaID(media_id) {

    const filter = {include: [User, Review]};
    filter.where = {media_id: media_id};

    const reviews = await Favorite.findAll(filter);

    return reviews;

}

// FUNCION PARA CREAR LA REVIEW
async function create(data) {

    data.date = new Date();

    if (!data.rating) {
        throw new RatingNotProvided();
    }

    if (!data.review) {
        throw new ReviewNotProvided();
    }

    const response = await Review.create(data);
    return response;

}

// FUNCION PARA EDITAR LA REVIEW
async function edit(favorite_id, data){

    data.date = new Date();

    const result = await Review.update(
        data,
        {
            where:{
                favorite_id: favorite_id
            }
        }
    );

    const filter = {include: [User, Favorite]};
    filter.where = {favorite_id: favorite_id};

    const updatedReview = await Review.findOne(filter);
    return updatedReview;

}

// FUNCION PARA ELIMINAR LA REVIEW
async function remove(id){

    const result = await Review.findByPk(id);
    result.destroy();

}

// FUNCION PARA ELIMINAR EL FAVORITO EL ID DE LA API EXTERNA
async function removeByFavoriteID(favorite_id){

    const result = await Review.findOne({ where: { favorite_id: favorite_id } });
    result.destroy();

}

export default{
    getAllUserReviews,
    getByID,
    getByFavoriteID,
    getByMediaID,
    create,
    edit,
    remove,
    removeByFavoriteID
}
import reviewController from './reviewController.js';
import Favorite from "../../models/favorite.js";

async function getAllUserReviews(req,res){
    try{
        const id = req.session.user?.user_id;
        const favorites = await reviewController.getAllUserReviews(id);
        //res.json(reviews);
        res.render("review/list",{favorites});
    }catch (error) {
        console.error(error);
        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    } 
}

async function getByID(req,res){

    try {

        const review_id = req.params.review_id;
        const review = await reviewController.getByID(review_id);

        if(!review){
            res.render("layout", {error: "There is no review for that ID"});
        }

        res.render("review/show",{review}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function getByMediaID(req,res){

    try {

        const media_id = req.params.media_id;
        const review = await reviewController.getByMediaID(media_id);

        if(!review){
            res.render("layout", {error: "There is no review for that ID"});
        }

        res.render("review/show",{review}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function createForm(req, res) {
    
    try {
        const filter ={include: Favorite};
        const error = req.query.error;
        const id = req.session.user?.user_id;
        filter.where = {user_id: id};

        const favorites = await Favorite.findAll(filter);

        res.render("review/create", { favorites, error });

    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function create(req, res) {
    try {
        const response = await reviewController.create(req.body);
        res.redirect("/review");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/review/create?error=" + error.message)
        } else {
            res.redirect("/review/create?error=Internal+server+error")
        }
    }
}

async function editForm(req, res) {
    try {
        const favorite_id = req.params.favorite_id;
        const error = req.query.error;
        const review = await reviewController.getByFavoriteID(favorite_id);
        if (!review) {
            res.redirect("/review")
        }
        res.render("review/edit", { review, error});
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function edit(req, res) {
    const favorite_id = req.params.favorite_id;
    try {
        const result = await reviewController.edit(favorite_id, req.body);
        res.redirect("/review/" + favorite_id);
    }catch(error){
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/review/${favorite_id}/edit?error=` + error.message)
        } else {
            res.render("layout", { error: "Internal server error" });
        }
    }
}

async function remove(req, res) {
    try{
        const review_id = req.params.review_id;
        const response = await reviewController.remove(review_id);
        res.redirect("/review");
    }catch(error){
        res.render("layout", { error: "Internal server error" }); 
    }
}

export default{
    getAllUserReviews,
    getByID,
    getByMediaID,
    create,
    createForm,
    edit,
    editForm,
    remove,
};
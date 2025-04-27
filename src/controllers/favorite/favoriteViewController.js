import favoriteController from './favoriteController.js';

async function getAllUserFavorites(req,res){
    try{
        const id = req.session.user?.user_id;
        const favorites = await favoriteController.getAllUserFavorites(id);
        //res.json(favorites);
        res.render("favorite/list",{favorites});
    }catch (error) {
        console.error(error);
        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    } 
}

async function getByID(req,res){

    try {

        const favorite_id = req.params.favorite_id;
        const favorite = await favoriteController.getByID(favorite_id);

        if(!favorite){
            res.render("layout", {error: "There is no favorite for that ID"});
        }

        res.render("favorite/show",{favorite}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function getByMediaID(req,res){

    try {

        const media_id = req.params.media_id;
        const favorite = await favoriteController.getByMediaID(media_id);

        if(!favorite){
            res.render("layout", {error: "There is no favorite for that ID"});
        }

        res.render("favorite/show",{favorite}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function createForm(req, res) {
    
    try {

        res.render("favorite/create");

    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function create(req, res) {
    try {
        const response = await standController.create(req.body);
        res.redirect("/favorite");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/favorite/new?error=" + error.message)
        } else {
            res.redirect("/favorite/new?error=Internal+server+error")
        }
    }
}

async function editForm(req, res) {
    try {
        const favorite_id = req.params.favorite_id;
        const error = req.query.error;
        const favorite = await favoriteController.getByID(favorite_id);
        if (!favorite) {
            res.redirect("/favorite")
        }
        res.render("favorite/edit", { favorite, error});
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function edit(req, res) {
    const favorite_id = req.params.favorite_id;
    try {
        const result = await favoriteController.edit(favorite_id, req.body);
        res.redirect("/favorite/" + favorite_id);
    }catch(error){
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/favorite/${favorite_id}/edit?error=` + error.message)
        } else {
            res.render("layout", { error: "Internal server error" });
        }
    }
}

async function remove(req, res) {
    try{
        const favorite_id = req.params.favorite_id;
        const response = await favoriteController.remove(favorite_id);
        res.redirect("/favorite");
    }catch(error){
        res.render("layout", { error: "Internal server error" }); 
    }
}

export default{
    getAllUserFavorites,
    getByID,
    getByMediaID,
    create,
    createForm,
    edit,
    editForm,
    remove,
};
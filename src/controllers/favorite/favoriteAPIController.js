import favoriteController from './favoriteController.js';

async function getAllUserFavorites(req,res){

    try {

        const id = req.user?.user_id;
        const favorites = await favoriteController.getAllUserFavorites(id);
        res.json(favorites);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }

}
  
async function getByID(req,res){

    try {

        const id = req.params.id;
        const favorite = await favoriteController.getByID(id);
        res.json(favorite);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }
    
}

async function getByMediaID(req,res){

    try {

        const media_id = req.params.media_id;
        const favorite = await favoriteController.getByMediaID(media_id);
        res.json(favorite);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }
    
}

async function create(req, res) {

    try {

        const response = await favoriteController.create(req.body);
        res.json(response);

    } catch (error) {

        console.error(error);

        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Server error" });
        }

    }
}

async function edit(req, res) {

    try {

        const id = req.params.id;
        const result = await favoriteController.edit(id, req.body);
        res.json(result);

    } catch (error) {

        console.error(error);

        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal Server error" });
        }

    }
}

async function editByMediaID(req, res) {

    try {

        const media_id = req.params.media_id;
        const result = await favoriteController.editByMediaID(id, req.body);
        res.json(result);

    } catch (error) {

        console.error(error);

        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal Server error" });
        }

    }
}

async function remove(req, res) {

    try{

        const id = req.params.id;
        const response = await favoriteController.remove(id);
        res.json(response);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Internal Server error" });

    }
}

async function removeByMediaID(req, res) {

    try{

        const media_id = req.params.media_id;
        const response = await favoriteController.removeByMediaID(media_id);
        res.json(response);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Internal Server error" });

    }
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
};
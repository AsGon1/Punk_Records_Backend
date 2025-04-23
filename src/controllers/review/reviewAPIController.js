import reviewController from './favoriteController.js';

async function getAllUserReviews(req,res){

    try {

        const id = req.session.user?.user_id;
        const reviews = await reviewController.getAllUserReviews(id);
        res.json(reviews);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }

}
  
async function getByID(req,res){

    try {

        const id = req.params.id;
        const review = await reviewController.getByID(id);
        res.json(review);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }
    
}

async function getByFavoriteID(req,res){

    try {

        const favorite_id = req.params.favorite_id;
        const review = await reviewController.getByFavoriteID(favorite_id);
        res.json(review);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }
    
}

async function getByMediaID(req,res){

    try {

        const madia_id = req.params.media_id;
        const reviews = await reviewController.getByMediaID(madia_id);
        res.json(reviews);

    } catch (error) {

        console.error(error);
        res.status(500).json({error: "Internal Server Error"});

    }
    
}

async function create(req, res) {

    try {

        const response = await reviewController.create(req.body);
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

        const favorite_id = req.params.favorite_id;
        const result = await favoriteController.edit(favorite_id, req.body);
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
        const response = await reviewController.remove(id);
        res.json(response);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Internal Server error" });

    }
}

async function removeByFavoriteID(req, res) {

    try{

        const favorite_id = req.params.favorite_id;
        const response = await favoriteController.removeByFavoriteID(media_id);
        res.json(response);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Internal Server error" });

    }
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
};
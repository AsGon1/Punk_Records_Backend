import {Router} from "express";
import favoriteAPIController from "../../controllers/favorite/favoriteAPIController.js"
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
const router = Router();

// conseguir todos los favoritos del usuario
router.get("/",isLoggedInAPI,favoriteAPIController.getAllUserFavorites)

// crear un favorito
router.post("/create",favoriteAPIController.create)

// conseguir favorito por id
router.get("/:id",favoriteAPIController.getByID)

// conseguir favorito por id de la api externa
router.get("/media/:media_id", isLoggedInAPI, favoriteAPIController.getByMediaID)

// modificar un favorito
router.put("/:id",favoriteAPIController.edit)

// modificar un favorito por id de la api externa
router.put("/media/:media_id",favoriteAPIController.editByMediaID)

// ruta para eliminar un favorito
router.delete("/:id/delete",favoriteAPIController.remove)

// ruta para eliminar un favorito
router.delete("/media/:media_id/delete",favoriteAPIController.removeByMediaID)

export default router;
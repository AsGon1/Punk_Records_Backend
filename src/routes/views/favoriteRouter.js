import {Router} from "express";
import favoriteViewController from "../../controllers/favorite/favoriteViewController.js"
import { isLoggedInSession } from "../../middleware/authMiddleware.js";

const router = Router();

// conseguir todos los favoritos del usuario
router.get("/",isLoggedInSession,favoriteViewController.getAllUserFavorites)

// crear un favorito
router.get("/create",favoriteViewController.createForm);
router.post("/",favoriteViewController.create)

// conseguir favorito por id
router.get("/:id",favoriteViewController.getByID)

// conseguir favorito por id de la api externa
router.get("/media/:media_id",favoriteViewController.getByMediaID)

// modificar un favorito
router.get("/:id/edit",favoriteViewController.editForm)
router.put("/:id",favoriteViewController.edit)

// ruta para eliminar un favorito
router.delete("/:id",favoriteViewController.remove)

export default router;
import {Router} from "express";
import reviewViewController from "../../controllers/review/reviewViewController.js"
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";

const router = Router();

// conseguir todos los favoritos del usuario
router.get("/",isLoggedInAPI,reviewViewController.getAllUserReviews)

// crear un favorito
router.get("/create",reviewViewController.createForm);
router.post("/",reviewViewController.create)

// conseguir favorito por id
router.get("/:id",reviewViewController.getByID)

// conseguir favorito por id de la api externa
router.get("/media/:media_id",reviewViewController.getByMediaID)

// modificar un favorito
router.get("/:id/edit",reviewViewController.editForm)
router.put("/:id",reviewViewController.edit)

// ruta para eliminar un favorito
router.delete("/:id",reviewViewController.remove)

export default router;
import {Router} from "express";
import reviewAPIController from "../../controllers/review/reviewAPIController.js"
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
const router = Router();

// conseguir todas las reviews del usuario
router.get("/",isLoggedInAPI,reviewAPIController.getAllUserReviews)

// crear una review
router.post("/create",reviewAPIController.create)

// conseguir review por id
router.get("/:id",reviewAPIController.getByID)

// conseguir review por id de favorito
router.get("/favorite/:favorite_id",reviewAPIController.getByFavoriteID)

// conseguir todas las reviews por id de anime o manga
router.get("/media/:media_id",reviewAPIController.getByMediaID)

// modificar una review
router.put("/:favorite_id",reviewAPIController.edit)

// ruta para eliminar una review
router.delete("/:id/delete",reviewAPIController.remove)

// ruta para eliminar un una review por id del favorito
router.delete("/favorite/:favorite_id/delete",reviewAPIController.removeByFavoriteID)

export default router;
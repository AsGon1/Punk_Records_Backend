import {Router} from "express";
import reviewViewController from "../../controllers/review/reviewViewController.js"
import { isLoggedInSession } from "../../middleware/authMiddleware.js";

const router = Router();

// conseguir todos las reviews del usuario
router.get("/",isLoggedInSession,reviewViewController.getAllUserReviews)

// crear una review
router.get("/create",reviewViewController.createForm);
router.post("/",reviewViewController.create)

// conseguir review por id
router.get("/:id",reviewViewController.getByID)

// conseguir review por id del medio
router.get("/media/:media_id",reviewViewController.getByMediaID)

// modificar una review
router.get("/:id/edit",reviewViewController.editForm)
router.put("/:id",reviewViewController.edit)

// ruta para eliminar un review
router.delete("/:id/delete",reviewViewController.remove)

export default router;
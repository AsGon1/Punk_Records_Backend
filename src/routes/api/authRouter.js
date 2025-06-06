import { Router } from "express";
import authAPIController from "../../controllers/auth/authAPIController.js";


const router = Router();


router.post("/register",authAPIController.register);
router.post("/login",authAPIController.login);


export default router;
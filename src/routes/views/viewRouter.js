import { Router } from "express";
import authRouter from "./authRouter.js";
import favoriteRouter from "./favoriteRouter.js";
import reviewRouter from "./reviewRouter.js";
import isAuthenticated from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/home", isAuthenticated, (req, res) => {
    res.render("userHome", { user: req.session.user });
});


router.get("/", (req, res) => {
    if (req.session.user) {
        return res.redirect("/home");
    } else {
        return res.redirect("/login");
    }
});

router.use("/",authRouter);
router.use("/favorite",favoriteRouter);
router.use("/review",reviewRouter);

export default router;
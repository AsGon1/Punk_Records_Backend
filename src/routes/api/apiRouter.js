import { Router } from "express";
import authRouter from "./authRouter.js";
import favoriteRouter from "./favoriteRouter.js"
import reviewRouter from "./reviewRouter.js"

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to Punk Records API");
})

router.use("/", authRouter);
router.use("/favorite", favoriteRouter);
router.use("/review", reviewRouter);

export default router
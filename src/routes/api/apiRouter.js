import { Router } from "express";
import authRouter from "./authRouter.js";
import favoriteRouter from "./favoriteRouter.js"

const router = Router();

router.get("/", (req, res) => {
    res.send("welcome to Punk Records API");
})

router.use("/", authRouter);
router.use("/favorite", favoriteRouter);

export default router
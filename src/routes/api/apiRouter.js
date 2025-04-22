import { Router } from "express";
import authRouter from "./authRouter.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("welcome to Punk Records API");
})

router.use("/", authRouter);

export default router
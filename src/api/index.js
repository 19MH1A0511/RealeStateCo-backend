import express from "express";
const router = express.Router();


import sellerModule from "./saller/saller.router.js";
import LoginRouter from "./login/login.router.js";

router.use("/seller",sellerModule);
router.use("/login",LoginRouter);

export default router;

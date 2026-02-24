import express from "express";
import sellerController from "./saller.controller.js";
// import Protects from'../../middleware/auth.middleware.js';

const sellerRouter = express.Router();
// const protects = new Protects();


sellerRouter.post("/add",sellerController.createseller);
sellerRouter.get("/list",sellerController.fetchsellerList); //protects.protect,
sellerRouter.get("/getbyid/:id",sellerController.fetchSellerById);

export default sellerRouter;
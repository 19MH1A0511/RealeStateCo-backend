import express from "express";
import ReviewsController from "./reviews.controller.js";
// import Protects from'../../middleware/auth.middleware.js';

const ReviewsRouter = express.Router();
// const protects = new Protects();


ReviewsRouter.post("/add",ReviewsController.createReviews);
ReviewsRouter.get("/list",ReviewsController.getAllReviews);



export default ReviewsRouter;
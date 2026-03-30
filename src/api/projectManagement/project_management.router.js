import express from "express";
import projectManagementController from "./project_management.controller.js";
// import Protects from'../../middleware/auth.middleware.js';

const projectManagementRouter = express.Router();
// const protects = new Protects();


projectManagementRouter.post("/add",projectManagementController.createProjectManagement);

//whishlist
projectManagementRouter.get("/wishlist/:userId",projectManagementController.getWishlistByUserId);
projectManagementRouter.post("/wishlist/add",projectManagementController.addToWishlist);
projectManagementRouter.delete("/wishlist/remove/:id",projectManagementController.removeFromWishlist);

export default projectManagementRouter;
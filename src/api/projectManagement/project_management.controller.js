import ProjectManagementService from "./project_management.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

const projectManagementService = new ProjectManagementService();
const commons = new Commons();

class ProjectManagementController {

    createProjectManagement = catchAsync(async (req, res) => {
        const newProjectManagement = await projectManagementService.addProjectManagement(req.body);
        res.status(200).json(new ApiResponse(200, "Project Management created successfully", newProjectManagement));
    });

    //wishlist
    getWishlistByUserId = catchAsync(async (req, res) => {
        const userId = req.params.userId;
        const wishlist = await projectManagementService.fetchWishlistByUserId(userId);
        res.status(200).json(new ApiResponse(200,wishlist, "Wishlist retrieved successfully"));
    });

    addToWishlist = catchAsync(async (req, res) => {
        const wishlist = await projectManagementService.addWishlistByUserId(req.body);
        res.status(200).json(new ApiResponse(200,wishlist, "Wishlist added successfully"));
    });

    removeFromWishlist = catchAsync(async (req, res) => {
        const wishlist = await projectManagementService.removeWishlistById(req.params.id);
        res.status(200).json(new ApiResponse(200,wishlist, "Wishlist removed successfully"));
    });
};

export default new ProjectManagementController;
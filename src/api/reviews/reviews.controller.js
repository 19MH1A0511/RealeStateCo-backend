import ReviewsService from "./reviews.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

const reviewsService = new ReviewsService();
const commons = new Commons();

class ReviewsController {

    createReviews = catchAsync(async (req, res) => {
        const newReviews = await reviewsService.addReviews(req.body);
        res.status(200).json(new ApiResponse(200, "reviews created successfully", newReviews));
    });

    getAllReviews = catchAsync(async (req, res) => {
        const reviewsList = await reviewsService.getAllReviews();
        res.status(200).json(new ApiResponse(200, reviewsList, "reviews list"));
    });

};

export default new ReviewsController;
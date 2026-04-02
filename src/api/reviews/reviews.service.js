import ReviewsRepository from "./reviews.repository.js";
import { ApiError } from "../../utils/apiError.js";


const reviewsRepository = new ReviewsRepository();

export default class ReviewsService {

    addReviews = async (data) => {
        const userData = await reviewsRepository.getUserData(Number(data?.userId));
        const mapData = {
            Name: userData?.name?.trim() || null,
            email: userData?.email?.trim() || null,
            phone: userData?.contactMobile?.trim() || null,
            review: data?.review?.trim() || null,
            rating: Number(data?.rating) || null,
            createdAt: new Date(),
            userId: Number(data?.userId),
        };
        return await reviewsRepository.createReviewsInDb(mapData);
    };

    getAllReviews = async () => {
        return await reviewsRepository.getAllReviewsFromDb();
    };

};
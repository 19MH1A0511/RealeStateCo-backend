import prisma from "../../config/db.js";

export default class ReviewsRepository {

    async createReviewsInDb(data) {
        return await prisma.reviews.create({ data })
    };

    async getAllReviewsFromDb() {
        return await prisma.reviews.findMany();
    };

    async getUserData(userId) {
        return await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    };

};
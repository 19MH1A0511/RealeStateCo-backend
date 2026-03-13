import prisma from "../../config/db.js";

export default class ProjectManagementRepository {

    async createProjectManagementInDb(data) {
        return await prisma.projectManagement.create({ data })
    };

    //wishlist
    async getWishlistByUserIdFromDb(userId) {
        return await prisma.buyerCart.findMany({
            where: { userId: Number(userId) },
            include: {
                SellerProperty: {
                    include: {
                        propertyImages: true
                    }
                }
            }
        });
    };

    async createWishlistInDb(data) {
        return await prisma.buyerCart.create({ data });
    };

    async removeWishlistByUserIdFromDb(data) {
        return await prisma.buyerCart.deleteMany({
            where: {
                userId: Number(data.userId),
                sellerPropertyId: Number(data.sellerPropertyId),
            },
        });
    };

};
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

    async removeWishlistByIdFromDb(id) {
        return await prisma.buyerCart.delete({
            where: { id: Number(id) },
        });
    };

};
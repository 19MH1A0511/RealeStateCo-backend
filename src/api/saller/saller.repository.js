import prisma from "../../config/db.js";

export default class sellerRepository {
    async createSellerInDb(data) {
        return await prisma.sellerProperty.create({ data })
    };

    async checkDuplicateField(data) {
        return await prisma.sellerProperty.findFirst({
            where: data
        });
    };

    async fetchSellerList() {
        return await prisma.sellerProperty.findMany({
            include: {
                propertyImages: true,
                buyerCarts: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    };

    async fetchSellerById(id) {
        return await prisma.sellerProperty.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                propertyImages: true,
                propertyDocuments: true,
            },
        });
    };

    async addPropertyImages(data) {
        return await prisma.propertyImages.create({
            data: {
                sellerPropertyId: data.sellerId,
                fileName: data.filename,
                path: data.path,
                fileType: data.mimetype,
                createdAt: new Date()
            }
        });
    };

    async addPropertyDcoument(data) {
        return await prisma.propertyDocument.create({
            data: {
                sellerPropertyId: data.sellerId,
                fileName: data.filename,
                path: data.path,
                fileType: data.mimetype,
                createdAt: new Date()
            }
        });
    };

    async fetchSellerPropertyByUserId(userId) {
        return await prisma.sellerProperty.findMany({
            where: {
                userId: Number(userId)
            },
            include: {
                propertyImages: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    };

    async updateSeller(data) {
        return await prisma.sellerProperty.update({ data })
    };

    async getSellerPropertyTypeList(buyertype){
        return await prisma.sellerProperty.findMany({
            where:{
                
            }
        });
    };

    async getPropertyListByCity(city){
        return await prisma.sellerProperty.findMany({
            where:{
                city: city
            },
            include: {
                propertyImages: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    };

    async getCities(){
        return await prisma.sellerProperty.findMany({
            distinct: ['city'],
            select: {
                city: true,
            },
        });
    };
};
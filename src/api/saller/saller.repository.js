import prisma from "../../config/db.js";

export default class BoardAffiliationRepository {
    async createSellerInDb(data) {
        return await prisma.seller.create({ data })
    };

    async checkDuplicateField(data) {
        return await prisma.seller.findFirst({
            where: data
        });
    };

    async fetchSellerList(){
        return await prisma.seller.findMany();
    };

    async fetchSellerById(id){
        return await prisma.seller.findById({
           where: id 
        });
    };

};
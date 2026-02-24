import prisma from "../../config/db.js";

export default class LoginRepository {
    async createUserInDb(data) {
        return await prisma.valentine.create({ data })
    };

    async checkDuplicateField(data) {
        return await prisma.user.findFirst({
            where: data
        });
    };

    async updateUser(data, id) {
        return await prisma.user.update({
            where: { id },
            data
        })
    };

    async createUser(data) {
        return prisma.user.create({ data })
    };

};
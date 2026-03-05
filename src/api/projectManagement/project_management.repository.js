import prisma from "../../config/db.js";

export default class ProjectManagementRepository {

    async createProjectManagementInDb(data) {
        return await prisma.projectManagement.create({ data })
    };
    
};
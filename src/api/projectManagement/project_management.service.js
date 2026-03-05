import ProjectManagementRepository from "./project_management.repository.js";
import { ApiError } from "../../utils/apiError.js";


const projectManagementRepository = new ProjectManagementRepository();

export default class ProjectManagementService {
    
    addProjectManagement = async (data) => {
        const mapData = {
            projectName: data?.projectName?.trim() || null,
            projectType: data?.projectType || null,
            description: data?.description || null,
            userId: Number(data?.userId),
        };
        return await projectManagementRepository.createProjectManagementInDb(mapData);
    };
};
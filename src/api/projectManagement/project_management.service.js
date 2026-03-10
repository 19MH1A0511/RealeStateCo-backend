import ProjectManagementRepository from "./project_management.repository.js";
import { ApiError } from "../../utils/apiError.js";


const projectManagementRepository = new ProjectManagementRepository();

export default class ProjectManagementService {

    addProjectManagement = async (data) => {
        if(data?.type){
            if(data.type === "Interior"){
                data.type = "interior_design";
            };
        };
        const mapData = {
            fristName: data?.firstName?.trim() || null,
            lastName: data?.lastName?.trim() || null,
            email: "",
            contactNumber: data?.mobile || null,
            alternativeContactNumber: data?.alternateMobile || null,
            projectType: data?.type || null,
            description: "",
            address: data?.address || null,
            city: data?.city || null,
            pincode: data?.pinCode || null,
            createdAt: new Date(),
            userId: Number(data?.userId),
        };
        return await projectManagementRepository.createProjectManagementInDb(mapData);
    };
};
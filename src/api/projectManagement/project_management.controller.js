import ProjectManagementService from "./project_management.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

const projectManagementService = new ProjectManagementService();
const commons = new Commons();

class ProjectManagementController {

    createProjectManagement = catchAsync(async (req, res) => {
        const newProjectManagement = await projectManagementService.addProjectManagement(req.body);
        res.status(200).json(new ApiResponse(200, "Project Management created successfully", newProjectManagement));
    });
};

export default new ProjectManagementController;
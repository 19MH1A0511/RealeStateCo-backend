import LoginService from "./login.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

const loginService = new LoginService();
const commons = new Commons();

class LoginController {
    verifyUserLogin = catchAsync(async (req, res) => {
        const responseData = await loginService.verifyUserLogin(req.body);
        res.status(200).json(new ApiResponse(200, responseData, "Successfully created Login content"));
    });

    registeredUserLogin = catchAsync(async (req, res) => {
        const responseData = await loginService.registeredUserLogin(req.body);
         res.status(200).json(new ApiResponse(200, responseData, "Successfully User Login"));
    });

};


export default new LoginController();
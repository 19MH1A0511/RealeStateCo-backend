import SellerService from "./saller.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

const sellerService = new SellerService();
const commons = new Commons();

class sellerController {

    createseller = catchAsync(async (req, res) => {
        const responseData = await sellerService.addseller(req.body);
        res.status(200).json(new ApiResponse(200, responseData, "Successfully created seller content"));
    });
    
    fetchsellerList = catchAsync(async (req, res) => {
        const responseData = await sellerService.getSellerList(req.body);
        res.status(200).json(new ApiResponse(200, responseData, "Fetch Data Successfully"));
    });

    fetchSellerById = catchAsync(async (req, res) => {
        const responseData = await sellerService.fetchSellerById(req.params.id);
        res.status(200).json(new ApiResponse(200, responseData, "Fetch Data Successfully"));
    });



};


export default new sellerController();
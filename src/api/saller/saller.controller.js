import SellerService from "./saller.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import Commons from "../../utils/commons.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiError } from "../../utils/apiError.js";

import multer from "multer";
// import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { uploadToBunny } from "../../utils/bunnyStorage.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sellerService = new SellerService();
const commons = new Commons();

class sellerController {

    createseller = catchAsync(async (req, res, next) => {
        const storage = multer.memoryStorage();
        const upload = multer({ storage }).fields([
            { name: "images", maxCount: 10 },
            { name: "documents", maxCount: 10 },
        ]);

        upload(req, res, async (err) => {
            if (err) {
                return next(new ApiError(400, "File upload failed"));
            };
            const { body, files } = req;
            try {
                // ✅ Create Seller First
                const newSeller = await sellerService.addseller(body);
                const sellerId = newSeller.id;
                if (files) {
                    for (const [fieldName, fileArr] of Object.entries(files)) {
                        for (const file of fileArr) {
                            // const uniqueName = `${file.originalname}`;
                            if (process.env.STORAGE_DRIVER === "bunny") {
                                const relativePath = `${process.env.STORAGE_BASE_PATH}/uploads/user/${sellerId}/${fieldName}/${file.originalname}`;
                                await uploadToBunny({
                                    storageZone: process.env.BUNNY_STORAGE_ZONE,
                                    apiKey: process.env.BUNNY_API_KEY,
                                    region: process.env.BUNNY_REGION,
                                    fileBuffer: file.buffer,
                                    remotePath: relativePath,
                                    contentType: file.mimetype,
                                });
                                const publicUrl = `${process.env.BUNNY_PUBLIC_URL}/${relativePath}`;
                                const fileData = {
                                    filename: file.originalname,
                                    sellerId: sellerId,
                                    path: publicUrl,
                                    mimetype: file.mimetype,
                                    size: file.size,
                                };
                                if (fieldName === "documents") {
                                    await sellerService.uploadSellerDocumentInBunny(fileData);
                                };
                                if (fieldName === "images") {
                                    await sellerService.uploadSellerImageInBunny(fileData);
                                };
                            };
                        };
                    };
                }
                const responseData = commons.bigintToString(newSeller);
                res.status(201).json(new ApiResponse(201, responseData, "Seller created successfully!"));
            } catch (error) {
                next(error);
            }
        });
    });


    fetchsellerList = catchAsync(async (req, res) => {
        const responseData = await sellerService.getSellerList();
        res.status(200).json(new ApiResponse(200, responseData, "Fetch Data Successfully"));
    });

    fetchSellerById = catchAsync(async (req, res) => {
        const responseData = await sellerService.fetchSellerById(req.params.id);
        res.status(200).json(new ApiResponse(200, responseData, "Fetch Data Successfully"));
    });

    fetchSellerPropertyByUserId = catchAsync(async (req, res) => {
        const responseData = await sellerService.getSellerPropertyByUserId(req.params.userid);
        res.status(200).json(new ApiResponse(200, responseData, "Fetch Data Successfully"));
    });

    updateSeller = catchAsync(async (req, res, next) => {
        const storage = multer.memoryStorage();
        const upload = multer({ storage }).fields([
            { name: "images", maxCount: 10 },
            { name: "documents", maxCount: 10 },
        ]);

        upload(req, res, async (err) => {
            if (err) {
                return next(new ApiError(400, "File upload failed"));
            };
            const { body, files } = req;
            try {
                const newSeller = await sellerService.updateSeller(body);
                const sellerId = newSeller.id;
                if (files) {
                    for (const [fieldName, fileArr] of Object.entries(files)) {
                        for (const file of fileArr) {
                            // const uniqueName = `${file.originalname}`;
                            if (process.env.STORAGE_DRIVER === "bunny") {
                                const relativePath = `${process.env.STORAGE_BASE_PATH}/uploads/user/${sellerId}/${fieldName}/${file.originalname}`;
                                await uploadToBunny({
                                    storageZone: process.env.BUNNY_STORAGE_ZONE,
                                    apiKey: process.env.BUNNY_API_KEY,
                                    region: process.env.BUNNY_REGION,
                                    fileBuffer: file.buffer,
                                    remotePath: relativePath,
                                    contentType: file.mimetype,
                                });
                                const publicUrl = `${process.env.BUNNY_PUBLIC_URL}/${relativePath}`;
                                const fileData = {
                                    filename: file.originalname,
                                    sellerId: sellerId,
                                    path: publicUrl,
                                    mimetype: file.mimetype,
                                    size: file.size,
                                };
                                if (fieldName === "documents") {
                                    await sellerService.uploadSellerDocumentInBunny(fileData);
                                };
                                if (fieldName === "images") {
                                    await sellerService.uploadSellerImageInBunny(fileData);
                                };
                            };
                        };
                    };
                }
                const responseData = commons.bigintToString(newSeller);
                res.status(201).json(new ApiResponse(201, responseData, "Seller created successfully!"));
            } catch (error) {
                next(error);
            }
        })
    });
};


export default new sellerController();
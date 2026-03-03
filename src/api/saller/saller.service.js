import SellerRepository from "./saller.repository.js";
import { ApiError } from "../../utils/apiError.js";


const sellerRepository = new SellerRepository();

export default class MenuService {

    addseller = async (data) => {
        // const checkDuplicateData = await sellerRepository.checkDuplicateField({
        //     firstName: {
        //         equals: data.firstName.trim(),
        //         mode: "insensitive"
        //     },
        //     contactMobile: data.contactMobile,
        //     email: data.email.trim(),
            
        // });
        // if (checkDuplicateData) {
        //     throw new ApiError(409, `already seller day exists. Please use a different data.`);
        // };

        const mapData = {
            fristName: data?.firstName?.trim() || null,
            userId: data?.userId,
            lastName: data?.lastName?.trim() || null,
            email: data?.email?.trim() || null,
            contactNumber: data?.contactNumber?.trim() || null,
            description: data?.description || null,
            propertyType: "COMMERCIAL",
            userType: "PROPERTY_SALLER",
            aadharNumber: null,
            address: data?.address?.trim() || null,
            city: data?.city?.trim() || null,
            pincode: data?.pincode || null,
        };
        return await sellerRepository.createSellerInDb(mapData);
    };

    uploadSellerDocumentInBunny = async (data) => {
        return await sellerRepository.addPropertyDcoument(data);
    };

    uploadSellerImageInBunny = async (data) => {
        return await sellerRepository.addPropertyImages(data)
    };

    getSellerList = async () => {
        return await sellerRepository.fetchSellerList();
    };

    fetchSellerById = async (id) => {
        return await sellerRepository.fetchSellerById(id);
    };

    getSellerPropertyByUserId = async (userId) => {
        return await sellerRepository.fetchSellerPropertyByUserId(userId);
    }
};
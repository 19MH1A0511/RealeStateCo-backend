import SellerRepository from "./saller.repository.js";
import { ApiError } from "../../utils/apiError.js";

const sellerRepository = new SellerRepository();

export default class MenuService {

    addseller = async (data) => {
        const checkDuplicateData = await sellerRepository.checkDuplicateField({
            name: {
                equals: data.name.trim(),
                mode: "insensitive"
            },
            contactMobile: data.contactMobile,
            email: data.email.trim(),
            loverName: data.loverName.trim(),
        });
        if (checkDuplicateData) {
            throw new ApiError(409, `already seller day exists. Please use a different data.`);
        };
        const mapData = {
            name: data.name.trim(),
            contactMobile: data.contactMobile,
            email: data.email.trim(),
            loverName: data.loverName.trim(),
            loverContactMobile: data.loverContactMobile,
            loverWhatsapp: data.loverWhatsapp,
            loverEmail: data.loverEmail.trim(),
            message: data.message,
            created_at: new Date(),
            updated_at: new Date()
        }
        return await sellerRepository.createSellerInDb(mapData);
    };

    getSellerList = async () => {
        return await sellerRepository.fetchSellerList();
    };

    fetchSellerById =async (id) => {
        return await sellerRepository.fetchSellerById(id);
    };

};
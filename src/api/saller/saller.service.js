import SellerRepository from "./saller.repository.js";
import { ApiError } from "../../utils/apiError.js";


const sellerRepository = new SellerRepository();

export default class SellerService {

    addseller = async (data) => {
       
        const mapData = {
            fristName: data?.firstName?.trim() || null,
            userId: Number(data?.userId),
            lastName: data?.lastName?.trim() || null,
            email: data?.email?.trim() || null,
            contactNumber: data?.contactNumber?.trim() || null,
            price: data?.price || null,
            description: data?.description || null,
            propertyType: data?.propertyType || null,
            userType: "PROPERTY_SALLER",
            aadharNumber: null,
            address: data?.address?.trim() || null,
            city: data?.city?.trim() || null,
            pincode: data?.pincode || null,
            propertyName: data?.propertyName?.trim() || null,
            furnishing: data?.furnishing?.trim() || null,
            facing: data?.facing?.trim() || null,
            parkingAvailable: data?.parkingAvailable === "true"|| false,
            bulidingAge: data?.bulidingAge?.trim() || null,
            totalRooms: data?.totalRooms || null,
            floorNumbers: data?.floorNumbers || null,
            landMark: data?.landMark?.trim() || null,
            status: "pending",
            state: data?.state || null,
            landArea: data?.landArea || null,
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
    };

    updateSeller = async (data) => {
        const mapData = {
            fristName: data?.firstName?.trim() || null,
            userId: Number(data?.userId),
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
        return await sellerRepository.updateSeller(mapData);
    };

    fetchSellerPropertyTypeList = async (buyertype) => {
        return await sellerRepository.getSellerPropertyTypeList(buyertype);
    };

    fetchPropertyListByCity = async (city) => {
        return await sellerRepository.getPropertyListByCity(city);
    };

    fetchCities = async () => {
        return await sellerRepository.getCities();
    };
};
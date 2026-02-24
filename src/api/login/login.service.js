import LoginRepository from "./login.repositroy.js";
import { ApiError } from "../../utils/apiError.js";
import SendEmailService from "../../utils/sendemail.service.js";
import jwt from "jsonwebtoken";
import twilio from "twilio";

const loginRepository = new LoginRepository();
const sendEmailService = new SendEmailService();

export default class LoginService {

    verifyUserLogin = async (data) => {
        if (data.email) {
            if (!data?.email) throw new ApiError(400, "Email is required");

            const checkDuplicateData = await loginRepository.checkDuplicateField({ email: data.email.trim() });
            const otp = Math.floor(100000 + Math.random() * 900000);
            const subject = "Your OTP Verification Code";

            const html = `
           <div style="font-family: Arial;">
              <h2>Email Verification</h2>
              <p>Your OTP is:</p>
              <h1 style="color:blue;">${otp}</h1>
              <p>This OTP will expire in 5 minutes.</p>
            </div>
          `;
            if (checkDuplicateData) {
                await loginRepository.updateUser({
                    email: data.email,
                    name:data.name,
                    otp:String(otp),
                    otpExpiry: new Date(Date.now() + 5 * 60 * 1000)
                }, checkDuplicateData.id);
                await sendEmailService.sendEmail(data.email, subject, html);
            } else {
                await loginRepository.createUser({
                    email: data.email,
                    otp:String(otp),
                    name:data.name,
                    otpExpiry: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
                });
                await sendEmailService.sendEmail(data.email, subject, html);
            }
            return {
                success: true,
                message: "OTP sent successfully"
            };
        } else if (data.phoneNumber) {

            if (!data?.phoneNumber) throw new ApiError(400, "Phone number is required");
            const phoneNumber = data.phoneNumber.trim();
            const checkDuplicateData = await loginRepository.checkDuplicateField({ phoneNumber });
            const otp = Math.floor(100000 + Math.random() * 900000);
            const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

            const client = twilio(
                process.env.TWILIO_ACCOUNT_SID,
                process.env.TWILIO_AUTH_TOKEN
            );
            if (checkDuplicateData) {
                await loginRepository.updateUser({
                    phoneNumber,
                    otp,
                    otpExpiry
                }, checkDuplicateData.id);

            } else {
                await loginRepository.createUser({
                    phoneNumber,
                    otp,
                    otpExpiry
                });
            };

            await client.messages.create({
                body: `Your OTP is ${otp}. It will expire in 5 minutes.`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: phoneNumber
            });

            return {
                success: true,
                message: "OTP sent successfully to phone"
            };
        };
    };

    registeredUserLogin = async (data) => {
        if (data.email) {
            if (!data?.email) throw new ApiError(400, "Email is required");
            const checkDuplicateData = await loginRepository.checkDuplicateField({ email: data.email.trim() });
            if (!checkDuplicateData) throw new ApiError(400, "Invalid credentials");
            if (!checkDuplicateData.otpExpiry || new Date() > new Date(checkDuplicateData.otpExpiry)) {
                throw new ApiError(400, "OTP expired");
            }
            let response
            if (checkDuplicateData.otp === data.otp) {
                response = await loginRepository.updateUser({
                    isActive: true
                }, checkDuplicateData.id);

            } else {
                throw new ApiError(400, "give otp is inValid")
            };
            const token = jwt.sign(
                {
                    id: checkDuplicateData.id,
                    email: checkDuplicateData.email
                },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            return { response,token:token };

        } else {

        };
    };

};
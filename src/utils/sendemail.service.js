import nodemailer from "nodemailer";
import { ApiError } from "./apiError.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default class SendEmailService {

    // sendEmail = async (to, subject, html) => {
    //     try {
    //         const transporter = nodemailer.createTransport({
    //             host: process.env.SMTP_HOST,
    //             port: process.env.SMTP_PORT,
    //             secure: Number(process.env.SMTP_PORT) === 465,
    //             auth: {
    //                 user: process.env.SMTP_USER,
    //                 pass: process.env.SMTP_PASSWORD,
    //             },
    //             tls: {
    //                 rejectUnauthorized: false // <--- ignore self-signed cert
    //             }
    //         });

    //         const info = await transporter.sendMail({
    //             from: process.env.SMTP_FROM,
    //             to,
    //             subject,
    //             html,
    //         });

    //         console.log(`📧 Email sent successfully to ${to}: ${info.messageId}`);
    //         return info;
    //     } catch (error) {
    //         console.error("❌ Error sending email:", error.message);
    //         // Optional: log deeper info for debugging
    //         if (error.response) {
    //             console.error("SMTP response:", error.response);
    //         }
    //         // You can throw a custom error or return a structured response
    //         throw new ApiError(200, "something went wrong,Please try again..");
    //     }
    // };


    sendEmail = async (to, subject, html) => {
        try {
            const msg = {
                to,
                from: {
                    email: "chittidiganesh999@gmail.com",
                    name: "Real Estate Co"
                },
                subject,
                html,
            };

            const res = await sgMail.send(msg);
            console.log("✅ Email sent:", res[0].statusCode);
        } catch (error) {
            console.error("❌ SendGrid Error:", error.response?.body || error.message);
        }
    };
};





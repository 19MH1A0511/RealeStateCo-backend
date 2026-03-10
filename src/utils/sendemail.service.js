import nodemailer from "nodemailer";
import { ApiError } from "./apiError.js";

export default class SendEmailService {

    sendEmail = async (to, subject, html) => {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: Number(process.env.SMTP_PORT) === 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false // <--- ignore self-signed cert
                }
            });

            const info = await transporter.sendMail({
                from: process.env.SMTP_FROM,
                to,
                subject,
                html,
            });

            console.log(`📧 Email sent successfully to ${to}: ${info.messageId}`);
            return info;
        } catch (error) {
            console.error("❌ Error sending email:", error.message);
            // Optional: log deeper info for debugging
            if (error.response) {
                console.error("SMTP response:", error.response);
            }
            // You can throw a custom error or return a structured response
            throw new ApiError(200, "something went wrong,Please try again..");
        }
    };

}

// import sgMail from "@sendgrid/mail";

// export default class SendEmailService {
//   constructor() {
//     // Initialize SendGrid API key once
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   }

//   sendEmail = async (to, subject, html) => {
//     const msg = {
//       to,
//       from: process.env.SENDGRID_FROM, // Verified sender address
//       subject,
//       html,
//     };

//     try {
//       const response = await sgMail.send(msg);
//       console.log("✅ Email sent successfully:", response[0].statusCode);
//       return {
//         success: true,
//         message: "Email sent successfully",
//       };
//     } catch (error) {
//       console.error("❌ SendGrid error:", error.response?.body || error);
//       throw new Error("Failed to send email");
//     }
//   };
// }

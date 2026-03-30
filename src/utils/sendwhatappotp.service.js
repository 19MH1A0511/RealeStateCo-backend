import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendOTP = async (phone, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "whatsapp:+14155238886", // Twilio sandbox number
      to: `whatsapp:+91${phone}`,
    });

    console.log("OTP sent successfully");
  } catch (error) {
    console.error(error);
  }
};
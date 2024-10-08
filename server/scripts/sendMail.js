import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent.");
  } catch (error) {
    console.log("Error sending email: " + error.message);
  }
};

// export const sendUserMail = async (mailOptions) => {
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email has been sent to user.");
//   } catch (error) {
//     console.log("Error sending user email: " + error.message);
//   }
// };

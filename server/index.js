import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import { sendMeMail, sendUserMail } from "./scripts/sendMail.js";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => {
    console.log("Database connected and running.");
  })
  .catch((error) => {
    console.log("Error connecting to the database: " + error.message);
  });

app.use(cors());
app.use(express.json());

app.post("/send-message", async (req, res) => {
  try {
    const { username, email, message, phoneNo } = req.body;

    if (!username || !email || !message || !phoneNo) {
      return res.status(400).json({ message: "All fields mandatory." });
    }

    const user = new User({
      username,
      email,
      phoneNo,
      message,
    });

    await user.save();
    await Promise.all(
      sendMeMail({
        from: {
          name: "Adisht Portfolio",
          address: process.env.USER_EMAIL,
        },
        to: "adisht7524@gmail.com",
        subject: "Message From Portfolio",
        text: `
      ${username} has tried to contact you and sent you a message!
      The below message was attached to the email:-
      ${message}

      You can contact them at ${email} and ${phoneNo}
      `,
      }),
      sendUserMail({
        from: {
          name: "Adisht Jaglan",
          address: process.env.USER_EMAIL,
        },
        to: `${email}`,
        subject: "Thanks for contacting me!",
        text: `
      Hi there ${username}!       
      Thank you for reaching out to me. I have received your message and 
      I will get back to your shortly.
      Regards,
      Adisht Jaglan.
      `,
      })
    );

    if (user) {
      return res
        .status(200)
        .json({ message: "Message sent successfully!", user });
    } else {
      return res.status(400).json({ message: "Message not sent." });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error occured while trying to send message: " + error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

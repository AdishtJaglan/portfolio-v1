import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import { sendMail } from "./scripts/sendMail.js";

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
      return res.status(400).json({ message: "All fields are mandatory." });
    }

    const user = await findOrCreateUser(username, email, phoneNo, message);

    await Promise.all([
      sendMeMail(username, email, phoneNo, message),
      sendUserMail(username, email),
    ]);

    const responseMessage = user.isNew
      ? "Message sent successfully! User registered."
      : "Message sent successfully!";

    res.status(200).json({ message: responseMessage });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({
      message: "Error occurred while trying to send message: " + error.message,
    });
  }
});

async function findOrCreateUser(username, email, phoneNo, message) {
  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ username, email, phoneNo, message });
    await user.save();
    user.isNew = true;
  }
  return user;
}

async function sendMeMail(username, email, phoneNo, message) {
  await sendMail({
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
  });
}

async function sendUserMail(username, email) {
  await sendMail({
    from: {
      name: "Adisht Jaglan",
      address: process.env.USER_EMAIL,
    },
    to: email,
    subject: "Thanks for contacting me!",
    text: `
    Hi there ${username}!       
    Thank you for reaching out to me. I have received your message and 
    I will get back to you shortly.
    Regards,
    Adisht Jaglan.
    `,
  });
}

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

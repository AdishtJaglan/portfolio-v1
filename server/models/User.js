import mongoose, { trusted } from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;

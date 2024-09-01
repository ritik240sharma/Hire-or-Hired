import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       unique: true,
       required: true,
       type: String,
    },
    fullname:{
       unique: true,
       required: true,
       type: String,
    },
    userVideo:{
       type: String,
       default: "",
    },
},{timestamps: true});

const User = mongoose.model("User",userSchema);
export default User;
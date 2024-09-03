import express from 'express';
import dotenv from "dotenv";
import connectMongoDB from './db/connectMongoDB.js';
import {v2 as cloudinary} from "cloudinary";
import { updateUser } from './controllers/user_controller.js';
import fileUpload from 'express-fileupload';
import multer from 'multer';

const app = express();
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const upload = multer({ dest: 'uploads/' }); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles:true
}));

// const router = express.Router();
app.post("api/hr/upload-video",  upload.single('userVideo'),updateUser);
// app.use(router.get("/profile/:username",protectRoute, getUserProfile);

app.listen(4000,() => {
    console.log("server running on port 4000");
    connectMongoDB();
})
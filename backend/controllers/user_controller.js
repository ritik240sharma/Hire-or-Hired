import User from "../models/user_model.js";
import {v2 as cloudinary} from "cloudinary";

export const updateUser = async (req,res) => {
     const {fullname,username} = req.body;
     const userVideo = req.files?.userVideo;
     console.log("video", userVideo);
     console.log("fullname", fullname);
     console.log("username", username);

     const userId = "66d3549c9727606538db393c";
     if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
     }
    

     try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
        if(username){
            user.username = username;
        }
        if(fullname){
            user.fullname = fullname;
        }
        
        if (userVideo) {
            // Upload video to Cloudinary
            const uploadResponse = await cloudinary.uploader.upload(userVideo.tempFilePath, {
                resource_type: 'video'
            });
            user.userVideo = uploadResponse.secure_url;
        }

        user = await user.save();
        return res.status(200).json(user);

     } catch (error) {
        console.log(`Error in updateUser: ${error.message}`);
        res.status(500).json({error: error.message});
     }
}
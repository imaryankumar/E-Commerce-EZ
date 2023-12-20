import express from 'express'
const router = express.Router();
import { Cloudinary } from '../utils/Cloudinary.js';
import upload from '../utils/Multer.js';

router.post("/upload",upload.single("image"),async(req,res)=>{
   try {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
      // Upload image to Cloudinary
      const result = await Cloudinary.v2.uploader.upload(req.file.buffer);
      return res.status(200).json({ message: 'Image uploaded successfully', url: result.url });
   } catch (error) {
    console.log(error)
   }
})

export default router;
import userModal from "../models/user.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModal.findOne({ email });
  
  try {
    if(email && password){
      const user = await userModal.findOne({ email });

      if (!user) {
        return res.status(401).json({success:false,message:"user not found"});
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({success:false,message:"Invalid Password"})
      }
  
      res.status(201).json({success:true,message:"Login Sucessfully"})
    }else{
      res.status(401).json({success:false,message:"All Fields are Required"})
    }
  } catch (error) {
    console.log(error);
  }
};

export default login;

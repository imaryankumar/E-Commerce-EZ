import userModal from "../models/user.js";
import bcrypt from 'bcrypt'
const register = async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const userRegister = await userModal.findOne({ email });
  if(name && email && password && mobile){
    if (!userRegister) {
        try {
          
          const hashPassword =await bcrypt.hash(password,6);
          const newRegister = await userModal.create({
            name,
            email,
            password:hashPassword,
            mobile,
          });
          res.status(201).json({ success: true, newRegister });
        } catch (error) {
          console.log(error);
        }
      }else{
        res.status(400).json({ success: false, msg:"User Already Register" });
      }
  }else{
    res.status(400).json({ success: false, msg:"All Fields are Required" });
  }

};

export default register;

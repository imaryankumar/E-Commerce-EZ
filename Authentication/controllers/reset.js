import userModal from "../models/user.js";
import bcrypt from "bcrypt";

const reset = async (req, res) => {
  const { email, password, conPassword } = req.body;
  try {
    const resetPass = await userModal.findOne({ email });
    if (password && conPassword) {
      if (!resetPass) {
        return res
          .status(400)
          .json({ success: false, msg: "User Not Found !!" });
      }
      if (password === conPassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        resetPass.password = hashedPassword;
        const newUser = await resetPass.save();
        res.status(200).json({ success: true, newUser });
      } else {
        res.status(400).json({ success: false, msg: "Password doesn't match" });
      }
    } else {
      res.status(400).json({ success: false, msg: "Fields are Required" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default reset;

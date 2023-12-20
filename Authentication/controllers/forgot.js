import userModal from "../models/user.js";

const forgot = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModal.findOne({ email });
    if (email) {
      if (!user) {
        return res
          .status(400)
          .json({ success: false, msg: "user not found !!" });
      }
      res.status(200).json({ success: true, msg: "Forgot Password" });
    } else {
      res.status(400).json({ success: false, msg: "Fields are Required" });
    }
  } catch (error) {
    console.log(error);
  }
};
export default forgot;

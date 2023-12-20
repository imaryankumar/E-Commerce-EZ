import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require:true
    },
    email: {
      type: String,
      require:true
    },
    password: {
      type: String,
      require:true
    },
    mobile: {
      type: Number,
      require:true
    },
  },
  {
    timestamps: true,
  }
);

const userModal = mongoose.model("Authentication", userSchema);

export default userModal;

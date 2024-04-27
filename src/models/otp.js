import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    otp: String,
    type:{
      type: String,
      default:"LOGIN",
      enum:["LOGIN","FORGOTPASSWORD"]
    },
    email: String,
    expiresAt: {
      type: Date,
      // required:[true,"Expiry Date of otp must be provided"]
    },
  },
  { timestamps: true, expireAfterSeconds: 300 } // 5minutes
);


export default mongoose.model("OTP", otpSchema, "otp");

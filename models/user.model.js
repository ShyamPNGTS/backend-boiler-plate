const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
      trim: true,
      unique:true,
      required: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isProfile: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      required: false,
    },
    otpExpires: {
      type: Date,
      required: false,
    },
 role: {
 type: String,
 default: 'creator'
 },
    emailToken: {
      type: String,
      required:false,
    },
    resetToken: {
      type: String,
      required:false,
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel'
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wallet'
    },
    creatorProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CreatorProfile'
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);

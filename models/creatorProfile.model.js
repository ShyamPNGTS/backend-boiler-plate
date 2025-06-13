const mongoose = require('mongoose');

const creatorProfileSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  aadhaarNumber: {
    type: String,
    required: true,
    unique: true
  },
  alternateNumber: {
    type: String
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const CreatorProfile = mongoose.model('CreatorProfile', creatorProfileSchema);

module.exports = CreatorProfile;
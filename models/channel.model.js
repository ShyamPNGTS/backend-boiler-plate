const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  backgroundImage: {
    type: String,
    required: false, // or true, depending on your requirements
  },
  profilePicture: {
    type: String,
    required: false, // or true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
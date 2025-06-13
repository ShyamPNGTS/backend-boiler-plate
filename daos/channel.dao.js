const Channel = require('../models/channel.model');

/**
 * Creates a new channel in the database.
 * @param {object} channelData - The data for the new channel.
 * @returns {Promise<object>} The created channel document.
 */
const createChannel = async (channelData) => {
  try {
    const newChannel = new Channel(channelData);
    const savedChannel = await newChannel.save();
    return savedChannel;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createChannel,
};
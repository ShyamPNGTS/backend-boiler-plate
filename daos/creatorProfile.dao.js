const CreatorProfile = require('../models/creatorProfile.model');

const creatorProfileDao = {
  /**
   * Creates a new creator profile.
   * @param {object} creatorProfileData - The data for the new creator profile.
   * @returns {Promise<object>} The created creator profile object.
   */
  createCreatorProfile: async (creatorProfileData) => {
    const creatorProfile = new CreatorProfile(creatorProfileData);
    return await creatorProfile.save();
  }
};

module.exports = creatorProfileDao;
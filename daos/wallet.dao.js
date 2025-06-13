const Wallet = require('../models/wallet.model');

const walletDAO = {
  /**
   * Create a new wallet.
   * @param {string} userId - The ID of the user the wallet belongs to.
   * @returns {Promise<Wallet>} - The created wallet document.
   */
  createWallet: async (userId) => {
    try {
      const newWallet = new Wallet({
        user: userId,
        balance: 0,
      });
      await newWallet.save();
      return newWallet;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = walletDAO;
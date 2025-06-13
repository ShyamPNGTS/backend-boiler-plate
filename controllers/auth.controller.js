const authService = require("../services/auth.service");

class AuthController {
  // Function to handle creator signup
  async signup(req, res) {
    try {
      const { name, email, mobileNumber, password, confirmPassword } = req.body;

      // Basic validation
      if (!name || !email || !mobileNumber || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
      }

      // Call auth service for signup logic
      const newUser = await authService.signup({
        name,
        email,
        mobileNumber,
        password
      });

      // Save all documents in a transaction (optional but recommended for data consistency)
      // For simplicity, saving individually here.
      await newUser.save();
      await newChannel.save();
      await newWallet.save();
      await newCreatorProfile.save();

      // Send OTP (implement sendOTP function)
      // await authService.sendVerificationOTP(newUser.email, newUser.otp); // Assuming sendVerificationOTP exists in authService
      console.log(`Sending OTP ${newUser.otp} to ${newUser.email}`); // Mock sending OTP

      return res.status(201).json({
        message: 'User created successfully. OTP sent for verification.',
        userId: newUser._id
      });
    } catch (error) {
      console.error("Error during signup:", error);
      return res.status(500).json({ message: "Internal server error during signup.", error: error.message });
    }
  }

  // Function to handle OTP verification
  async verifyOtp(req, res) {
    // Implement OTP verification logic here
  }

  // Function to handle user login
  async login(req, res) {
    try {
      const result = await authService.loginService(req, res);
 return result;
    } catch (error) {
 throw error;
    }
  }
}

module.exports = new AuthController();

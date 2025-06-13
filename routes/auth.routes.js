const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const log = require("../utils/helpers/logger.util");


/**
 * @swagger
 * /auth/register:
 *   post:
 * summary: Creator Signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 * type: string
 *               email:
 * type: string
 * format: email
 *               mobileNumber:
 * type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Creator registered successfully. OTP sent for verification.
 * '400':
 * description: Bad request (e.g., missing fields, passwords don't match).
 * '500':
 *         description: Internal Server Error.
 */
router.post("/register", async (req, res) => {
  try {
    const result = await authController.register(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a creator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful. Returns a JWT token.
 *       401:
 *         description: Unauthorized, e.g., invalid credentials.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/login", async (req, res) => {
  try {
    const result = await authController.login(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/googleLogin", async (req, res) => {
  try {
    const result = await authController.googleLogin(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/forgetPassword", async (req, res) => {
  try {
    const result = await authController.forgetPassword(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/resetPassword", async (req, res) => {
  try {
    const result = await authController.resetPassword(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;

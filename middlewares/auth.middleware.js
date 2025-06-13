const { JWT_SECRET } = require("../configs/server.config"); // Assuming this is needed for token verification, but currently unused
const userDao = require("../daos/user.dao");
const { verifyToken } = require("../utils/helpers/tokenHelper.util");
const jwt = require("jsonwebtoken");
class JWT {
  async authenticateJWT(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader !== null) {
        const token = authHeader.split(" ")[1]; // Assuming "Bearer TOKEN" format
        if (!token) {
          log.error("Error from [Auth MIDDLEWARE]: " + "Token not provided");
          return res.status(401).json({
 message: "Unauthorized: Token not provided", status: "failed", data: null, code: 401,
          });
        }
        const payload = verifyToken(token); // Assuming verifyToken decodes the token
        req.userId = payload.userId;
        const user = await userDao.getUserById(req.userId);
        if (user && user.data && user.code !== 201) {
          log.info("Authentication token verified");
          next();
        } else {
          log.error("Error from [Auth MIDDLEWARE]: " + "User not found");
          return res.status(401).json({
 message: "Unauthorized: User not found", status: "failed", data: null, code: 401,
          });
        }
      } else {
        log.error(
          "Error from [Auth MIDDLEWARE]: " + "Invalid authentication token"
        );
        return res.status(401).json({
 message: "Unauthorized: Invalid or missing token", status: "failed", data: null, code: 401,
        });
      }
    } catch (error) {
      // Handle potential errors during token verification (e.g., expired, invalid signature)
      if (error.name === 'TokenExpiredError') {
        log.error("Error from [Auth MIDDLEWARE]: Token expired");
        return res.status(401).json({ message: "Unauthorized: Token expired", status: "failed", data: null, code: 401 });
      }
      log.error("Error from [Auth MIDDLEWARE]: " + error.message);
      // Generic unauthorized error for other issues
      return res.status(400).json({
        message: "Unauthorized",
        status: "failed",
        data: null,
        code: 201,
      });
    }
  }
}

module.exports = new JWT();

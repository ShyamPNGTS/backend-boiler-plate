require("dotenv").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const log = require("./configs/logger.config");
const { PORT, SOCKET_PORT } = require("./configs/server.config");
const swaggerDefinition = require("./configs/swagger.config");

const { AuthRouter} = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// INITIALIZING DATABASE CONNECTION
require("./configs/db.config");

app.use(
  cookieSession({
    name: "session",
    keys: ["smstrap", "session", "backend"],
    maxAge: 24 * 60 * 60 * 100,
  })
);



// Middleware function to trim req.body
app.use((req, res, next) => {
  // Check if the request has a body
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === "string") {
        req.body[key] = req.body[key].trim();
      }
    });
  }
  console.log("HTTP method is " + req.method + ", URL -" + req.url);
  next(); // Proceed to the next middleware or route handler
});

// Swagger setup
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js", "./models/*.js"], // Path to the API docs and models
};
const swaggerSpec = swaggerJsdoc(options);
app.use("/api/auth", AuthRouter);


// Start Express app server
app.listen(PORT || 3000, () => {
  log.info(`Express server listening to the port ${PORT || 3000}`);
});

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


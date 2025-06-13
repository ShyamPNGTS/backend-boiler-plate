const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'YouTube-like Platform API',
      version: '1.0.0',
      description: 'API documentation for the YouTube-like platform backend',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your server URL
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        // Define your Mongoose models as Swagger schemas here
        // Example for a User model:
        // User: {
        //   type: 'object',
        //   properties: {
        //     _id: {
        //       type: 'string',
        //       description: 'User ID',
        //     },
        //     name: {
        //       type: 'string',
        //       description: 'User name',
        //     },
        //     email: {
        //       type: 'string',
        //       description: 'User email',
        //     },
        //     // Add other fields...
        //   },
        // },
      },
    },
  },
  apis: [
    './routes/*.js', // Path to your route files
    './models/*.js', // Path to your model files (for schema definitions)
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
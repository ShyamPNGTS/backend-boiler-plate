module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'YouTube-like Platform API',
    version: '1.0.0',
    description: 'API documentation for the YouTube-like platform backend.',
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // Adjust the URL as needed
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
      // Define your Mongoose schemas here as Swagger schemas
      // Example for the User model:
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'User ID',
          },
          name: {
            type: 'string',
            description: 'User\'s name',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'User\'s email address',
          },
          mobileNumber: {
            type: 'string',
            description: 'User\'s mobile number',
          },
          isVerified: {
            type: 'boolean',
            description: 'User account verification status',
          },
          role: {
            type: 'string',
            enum: ['creator'], // Or other roles if applicable
            description: 'User role',
          },
          channel: {
            $ref: '#/components/schemas/Channel', // Reference other schemas
          },
          wallet: {
            $ref: '#/components/schemas/Wallet',
          },
          creatorProfile: {
            $ref: '#/components/schemas/CreatorProfile',
          },
        },
      },
      // Add definitions for other models like Channel, Wallet, CreatorProfile, Video
      Channel: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          backgroundImage: { type: 'string' },
          profilePicture: { type: 'string' },
          user: {
             type: 'string',
             description: 'User ID of the channel owner'
          }
        }
      },
       Wallet: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          balance: { type: 'number', format: 'float' },
           user: {
             type: 'string',
             description: 'User ID of the wallet owner'
          }
        }
      },
      CreatorProfile: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          nickname: { type: 'string' },
          aadhaarNumber: { type: 'string' },
          alternateNumber: { type: 'string' },
          emailId: { type: 'string', format: 'email' },
           user: {
             type: 'string',
             description: 'User ID of the profile owner'
          }
        }
      },
      Video: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' },
          youtubeURL: { type: 'string' },
          thumbnail: { type: 'string' },
          channelName: { type: 'string' },
          user: {
             type: 'string',
             description: 'User ID of the video uploader'
          },
          totalViews: { type: 'number', format: 'integer', default: 0 },
          likes: { type: 'number', format: 'integer', default: 0 },
          dislikes: { type: 'number', format: 'integer', default: 0 },
          comments: {
            type: 'array',
            items: { type: 'string' } // Simple comment array
          }
        }
      },
    },
  },
  paths: {
    // Define your API routes here using JSDoc comments in your route files
    // Example for the signup route:
    /*
     * @swagger
     * /auth/signup:
     *   post:
     *     summary: Creator Signup
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: 'object'
     *             properties:
     *               name:
     *                 type: 'string'
     *               email:
     *                 type: 'string'
     *                 format: 'email'
     *               mobileNumber:
     *                 type: 'string'
     *               password:
     *                 type: 'string'
     *               confirmPassword:
     *                 type: 'string'
     *     responses:
     *       201:
     *         description: User created successfully. OTP sent for verification.
     *       400:
     *         description: Bad request (e.g., validation errors, passwords mismatch, user already exists)
     *       500:
     *         description: Internal server error
     */
    // Add definitions for other routes (verify OTP, login, video upload, etc.)
  },
};
export default () => ({
    "users-permissions": {
      config: {
        jwtSecret: process.env.JWT_SECRET,  // Use the JWT secret from your environment variables
      },
    },
  });
  
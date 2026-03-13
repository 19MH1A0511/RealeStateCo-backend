import "dotenv/config";

const config = {
  port: process.env.PORT || process.env.SERVICE_PORT || 5000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  serviceHost: process.env.SERVICE_HOST || "localhost",
};

export default config;

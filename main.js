import app from "./src/app.js";
import config from "./src/config/index.js";
import logger from "./src/config/logger.js";
import { connectDB } from "./src/config/db.js";

// It's good practice to wrap async calls in a function
async function startServer() {
  await connectDB(); // Connect to DB before starting the server

  app.listen(config.port, () => {
    logger.info(
      `Server is running at http://${config.serviceHost}:${config.port}`,
    );
  });
}

startServer();

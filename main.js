import app from "./src/app.js";
import config from "./src/config/index.js";
import logger from "./src/config/logger.js";
import { connectDB } from "./src/config/db.js";

async function startServer() {
  await connectDB();

  app.listen(config.port, () => {
    logger.info(`Server is running at http://${config.serviceHost}:${config.port}`);
  });
}

startServer();
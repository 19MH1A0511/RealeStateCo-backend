import express from "express";
import cors from "cors";
import compression from "compression";
import apiRouter from "./api/index.js";
// import { errorMiddleware } from "./middleware/error.middleware.js";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    // "http://192.168.1.9:5173",
    // "https://codeforlove.vercel.app",
  ],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization,company",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());

// Mount API routes
app.use("/project/api/v1/v.1.0.0", apiRouter);
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
// app.use('/student-photos', express.static('D:/workspace/CampassLog/V2/Backend/src/compuslog/student/photos'));


// Error handling middleware
// app.use(errorMiddleware);

export default app;

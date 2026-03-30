// import { ApiError } from "./apiError.js";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default class CommonFileService {
//     removeFileFromPath = async (files) => {
//         try {
//             if (!files || typeof files !== "object") {
//                 throw new ApiError(400, "Invalid input: files must be an object");
//             }

//             for (const key in files) {
//                 const file = files[key];
//                 if (file?.filepath) {
//                     // Build absolute path
//                     const absolutePath = path.join(__dirname, `../..${file.filepath}`);

//                     if (fs.existsSync(absolutePath)) {
//                         fs.unlinkSync(absolutePath);
//                         console.log(`✅ Removed: ${absolutePath}`);
//                     } else {
//                         console.warn(`⚠️ File not found: ${absolutePath}`);
//                     }
//                 }
//             }

//             return { success: true, message: "Files removed successfully" };
//         } catch (error) {
//             console.error(" Error while removing files:", error);
//             throw new ApiError(500, `Failed to remove files: ${error.message}`);
//         }
//     };

// }

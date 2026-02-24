// import fs from "fs";
// import path from "path";

// /**
//  * Save a file buffer to a specified location and return the full saved file path.
//  * 
//  * @param {Object} file - The multer file object (containing buffer, originalname, etc.)
//  * @param {string} uploadDir - The target directory where the file should be stored
//  * @returns {string} The full path of the saved file
//  */
// export const saveFileToStorage = (file, uploadDir) => {
//   if (!file || !file.buffer) {
//     throw new Error("Invalid file object provided.");
//   }

//   // Ensure the directory exists
//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
//   }

//   // Construct file path
//   const filePath = path.join(uploadDir, file.originalname);

//   // Write file buffer to the file system
//   fs.writeFileSync(filePath, file.buffer);

//   return filePath; // Return absolute path of the saved file
// };

// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";

// // ✅ Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const BranchID = req.body?.BranchID;
//     const empId = req.body?.EmployeeID;
//     const clientId = req.body?.clientId;

//     let logopath = path.join(__dirname, `../uploads/client/${clientId}`);
//     let uploadPath = path.join(
//       __dirname,
//       `../uploads/client/${clientId}/branch/${BranchID}`,
//     );
//     let uploadPathEmp = path.join(
//       __dirname,
//       `../uploads/client/${clientId}/branch/${BranchID}/employee/${empId}`,
//     );

//     if (file.fieldname === "logo") {
//       uploadPath = path.join(logopath, file.fieldname);
//     } else if (
//       file.fieldname === "profilePicture" ||
//       file.fieldname === "documents"
//     ) {
//       uploadPath = path.join(uploadPathEmp, file.fieldname);
//     } else if (file.fieldname) {
//       uploadPath = path.join(uploadPath, file.fieldname);
//     }

//     // ✅ Ensure folder exists
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }

//     cb(null, uploadPath);
//   },

//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// // ✅ Export properly in ES modules
// const uploadDocuments = multer({ storage });

// export default uploadDocuments;

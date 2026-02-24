// import jwt from "jsonwebtoken";
// import UserRepository from "../api/users/user.repository.js";
// import AdminRepository from "../api/users/admin.repository.js";

// const userRepository = new UserRepository();
// const adminRepository = new AdminRepository();

// export default class protects {
//   protect = async (req, res, next) => {
//     let token;
    
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//     }

//     if (!token) {
//       return res.status(401).json({ success: false, message: "Not authorized to access this route" });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       let user = await adminRepository.findOne(decoded.id);

//       if (!user) {
//         user = await userRepository.findAuthUser(decoded.id);
//       }

//       if (!user) {
//         return res.status(404).json({ success: false, message: "User not found with this ID" });
//       }

//       req.user = user;
//       next();
//     } catch (error) {
//       return res.status(401).json({ success: false, message: "Not authorized to access this route" });
//     }
//   };
// }


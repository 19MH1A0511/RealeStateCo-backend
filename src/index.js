import express from "express";
const router = express.Router();


import sellerModule from "./api/saller/saller.router.js";
import LoginRouter from "./api/login/login.router.js";
import projectManagementRouter from "./api/projectManagement/project_management.router.js";

router.use("/seller",sellerModule);
router.use("/login",LoginRouter);
router.use("/projectmanagement",projectManagementRouter); 

export default router;

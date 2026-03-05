import express from "express";
const router = express.Router();


import sellerModule from "./saller/saller.router.js";
import LoginRouter from "./login/login.router.js";
import projectManagementRouter from "./projectManagement/project_management.router.js";

router.use("/seller",sellerModule);
router.use("/login",LoginRouter);
router.use("/projectmanagement",projectManagementRouter); 

export default router;

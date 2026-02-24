import express from "express";
import LoginController from "./login.controller.js";
// import Protects from'../../middleware/auth.middleware.js';

const LoginRouter = express.Router();
// const protects = new Protects();


LoginRouter.post("/verification",LoginController.verifyUserLogin);
LoginRouter.post("/login",LoginController.registeredUserLogin);

export default LoginRouter;
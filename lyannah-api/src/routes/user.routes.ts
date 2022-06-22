import express, { Router } from "express";
import UserController from "../features/users/user.controller";

const userController: UserController = new UserController();
const userRouter: Router = express.Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/create-account", userController.createAccount);
userRouter.post("/verify-email", userController.verifyEmail);
userRouter.post("/forgot-password", userController.forgotPassword);
userRouter.post("/update-password", userController.updatePassword);

export = userRouter;

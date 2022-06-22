import { Request, Response } from "express";
import { UserServices } from "./user.services";

const userServices = new UserServices();

class UserController {
  //Create an handler for login
  createAccount(req: Request, res: Response) {
    return userServices.createUser(req, res);
  }
  //Create an handler for login
  loginUser(req: any, res: any) {
    return userServices.loginUser(req, res);
  }

  //Create a handler to verify user email
  verifyEmail(req: any, res: any) {
    return userServices.verifyEmailService(req, res);
  }

  //Create a handler to forgot-password
  forgotPassword(req: Request, res: Response) {
    return userServices.forgotPassword(req, res);
  }
  //Create a handler to forgot-password
  updatePassword(req: Request, res: Response) {
    return userServices.updatePasswordService(req, res);
  }
}

export = UserController;

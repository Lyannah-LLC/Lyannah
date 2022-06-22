import mongoose from "mongoose";
import { UserModel } from "./user.models";
import { ApiResponseObject } from "../../utils/response";
import { createNewUser } from "./reduced/create.user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { verifyEmail } from "../users/reduced/verify.email";
import express from "express";
import { forgotPassword } from "./reduced/forgot.password";
import { updatePassword } from "./reduced/update.password";
``;
dotenv.config();
const apiResponse: ApiResponseObject = new ApiResponseObject({});

export class UserServices {
  //CREATE USER
  createUser(req: any, res: any) {
    //reset the API response
    apiResponse.reseter();
    //check if email exists
    UserModel.find({ email: req.body.email })
      .exec()
      .then((email) => {
        if (email.length >= 1) {
          apiResponse.success = false;
          apiResponse.message = "email alaready exists";
          return res.status(409).json(apiResponse.returner());
        } else {
          createNewUser(req, res);
        }
      })
      .catch((e) => {
        console.log("error from creatUser" + e);
      });
  }

  //Login USER
  loginUser(req: any, res: any) {
    //reset the API response
    apiResponse.reseter();
    //get email from database
    UserModel.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length < 1) {
          apiResponse.success = false;
          apiResponse.message = "this user does not exist";
          return res.status(409).json(apiResponse.returner());
        } else {
          bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
              apiResponse.success = false;
              (apiResponse.message = "invalid credentials"),
                (apiResponse.meta = { error: err });
              return res.status(409).json(apiResponse.returner());
            } else if (result) {
              const token = jwt.sign(
                { email: user[0].email, userId: user[0]._id },
                `${process.env.JWT_SECRET}`,
                {
                  expiresIn: "7d",
                }
              );
              if (user[0].isVerified === true) {
                apiResponse.success = true;
                apiResponse.message = "User signed in!";
                apiResponse.token = token;
                return res.status(200).json(apiResponse.returner());
              } else {
                apiResponse.success = false;
                apiResponse.message = "email not verified";
                return res.status(401).json(apiResponse.returner());
              }
            } else {
              apiResponse.success = false;
              apiResponse.message = "invalid credentials";
              return res.status(409).json(apiResponse.returner());
            }
          });
        }
      })
      .catch((e) => {
        console.log("error from loginUser()" + e);
        apiResponse.success = false;
        apiResponse.message = "there was an error login this user in";
        apiResponse.source = { error: e };
        return res.status(500).json(apiResponse.returner());
      });
  }

  //Verify email
  verifyEmailService(req: any, res: any) {
    return verifyEmail(req, res, req.body.token);
  }

  //Forgot Password
  forgotPassword(req: express.Request, res: express.Response) {
    if (req.body != null) {
      return forgotPassword(req, res, req.body!.email);
    }
  }

  //Update Password
  updatePasswordService(req: express.Request, res: express.Response) {
    if (req.body != null) {
      return updatePassword(req, res, req.body!.token);
    }
  }
}

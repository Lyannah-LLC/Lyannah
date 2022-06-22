import { validatePassword } from "../../../utils/validators/validator";
import bcrypt from "bcrypt";
import { UserModel } from "../user.models";
import mongoose from "mongoose";
import { ApiResponseObject } from "../../../utils/response";
import { sendEmail } from "./send.email";
import jwt from "jsonwebtoken";
import { EmailTypes } from "../../../utils/email.types";

const apiResponse: ApiResponseObject = new ApiResponseObject({});

export const createNewUser = (req: any, res: any) => {
  apiResponse.reseter();
  if (validatePassword(req.body.password)) {
    //hash password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.statusCode(500).json({
          error: err,
        });
      } else {
        //1. save user to database with isVerified as default false
        const user = new UserModel({
          _id: new mongoose.Types.ObjectId(),
          userId: new mongoose.Types.ObjectId(),
          fullName: req.body.fullName,
          business: req.body.business,
          email: req.body.email,
          password: hash,
        });

        user
          .save()
          .then((result: any) => {
            console.log("This user was created successfully");

            // return res.status(201).json({
            //   message: "User Created",
            // });
          })
          .catch((err: Error) => {
            console.log("an error occurred while saving user:" + err);

            return res.status(500).json({
              error: err,
            });
          });

        //2. sign email and id to generate token
        const token = jwt.sign(
          { email: user.email, userId: user.userId },
          `${process.env.JWT_SECRET}`,
          {
            expiresIn: "1h",
          }
        );

        //3. Send user email that contains access token for verification
        sendEmail(req.body.email, token, res, EmailTypes.VerifyEmail);
      }
    });
  } else {
    res.statusCode = 409;
    res.json({
      message: "error",
      data: "password must contain at lease an Uppercase and a Digit ",
    });
  }
};

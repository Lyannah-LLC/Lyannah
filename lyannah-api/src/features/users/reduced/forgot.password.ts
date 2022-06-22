import jwt from "jsonwebtoken";
import express from "express";
import { decodeTokenObject } from "../../../utils/decode.token";
import { sendEmail } from "./send.email";
import { EmailTypes } from "../../../utils/email.types";
import { ApiResponseObject } from "../../../utils/response";
import { UserModel } from "../../users/user.models";

const apiResponse: ApiResponseObject = new ApiResponseObject({});

export const forgotPassword = (
  req: express.Request,
  res: express.Response,
  email: string
) => {
  try {
    //resetResponse
    apiResponse.reseter();
    if (email != null) {
      //check if email exists
      UserModel.find({ email: email })
        .exec()
        .then((email) => {
          if (email.length >= 1) {
            //2. sign email and id to generate token
            const token = jwt.sign(
              { email: req.body.email },
              `${process.env.JWT_SECRET}`,
              {
                expiresIn: "1h",
              }
            );

            // //send email with token of email address
            sendEmail(email[0].email, token, res, EmailTypes.ForgotPassword);
          } else {
            apiResponse.success = false;
            apiResponse.message = "email doesn't exist";
            return res.status(409).json(apiResponse.returner());
          }
        })
        .catch((e) => {
          apiResponse.success = false;
          apiResponse.message = "can't reset this password for this email";
          return res.status(500).json(apiResponse.returner());
        });

      //if yes //proceed with below
      //if no //email not found
    } else {
      apiResponse.success = false;
      apiResponse.message = "email parameter missing";
      return res.status(409).json(apiResponse.returner());
    }
  } catch (error: any) {
    apiResponse.success = false;
    apiResponse.message =
      "Can't reset password at this time, it's us. Try again";
    apiResponse.source = { error: error.message };
    return res.status(500).json(apiResponse.returner());
  }

  // ------update password -----
  //decode token and check expiry
  //check if email exists
  //update
};

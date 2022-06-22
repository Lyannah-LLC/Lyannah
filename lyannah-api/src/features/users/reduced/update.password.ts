import { decodeTokenObject } from "../../../utils/decode.token";
import { UserModel } from "../user.models";
UserModel;
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ApiResponseObject } from "../../../utils/response";
import { validatePassword } from "../../../utils/validators/validator";
import bcrypt from "bcrypt";

dotenv.config();
const apiResponse: ApiResponseObject = new ApiResponseObject({});

export const updatePassword = (req: any, res: any, token: string) => {
  apiResponse.reseter();
  //0.5 Verify token
  jwt.verify(token, `${process.env.JWT_SECRET}`, (err: any, result: any) => {
    if (err) {
      apiResponse.success = false;
      apiResponse.message = "can't update this password!";
      apiResponse.source = { error: err };
      return res.status(401).json(apiResponse.returner());
    } else {
      //1. decode token successfully
      const tokenObject = decodeTokenObject(token);
      const email = tokenObject.payload.email;

      //2. check that email exists from token in database
      UserModel.find({ email: email })
        .exec()
        .then((email) => {
          if (email.length >= 1) {
            if (req.body.password === req.body.confirmPassword) {
              if (validatePassword(!req.body.password)) {
                apiResponse.success = false;
                apiResponse.message =
                  "password must contain one upper case, 2 numbers and lowercase";
                return res.status(409).json(apiResponse.returner());
              } else {
                //hashPassword
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                  if (err) {
                    apiResponse.success = false;
                    apiResponse.message =
                      "something fatally went wrong, please try again";
                    return res.status(500).json(apiResponse.returner());
                  } else {
                    //update new password
                    UserModel.findOneAndUpdate(
                      { email: email[0].email },
                      { password: hash }
                    )
                      .exec()
                      .then((result) => {
                        apiResponse.success = true;
                        apiResponse.message = "password updated";
                        return res.status(200).json(apiResponse.returner());
                      })
                      .catch((e) => {
                        apiResponse.success = false;
                        apiResponse.message = "couldn't update password";
                        return res.status(500).json(apiResponse.returner());
                      });
                  }
                });
              }
            } else {
              apiResponse.success = false;
              apiResponse.message =
                "password and confirm password doesn't match";
              return res.status(409).json(apiResponse.returner());
            }
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

      //3. check that both password match
      //4. Also check that passwords meet the password criteria
    }
  });
};

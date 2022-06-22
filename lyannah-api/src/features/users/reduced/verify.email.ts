import jwt from "jsonwebtoken";
import { ApiResponseObject } from "../../../utils/response";
import { UserModel } from "../../users/user.models";
import dotenv from "dotenv";
import { decodeTokenObject } from "../../../utils/decode.token";

dotenv.config();
const apiResponse: ApiResponseObject = new ApiResponseObject({});

export const verifyEmail = (req: any, res: any, token: string) => {
  apiResponse.reseter();

  try {
    const tokenObject = decodeTokenObject(token);
    const userId = tokenObject.payload.userId;

    console.log("This is the decodedToken " + tokenObject);

    if (token) {
      //verify that the JWT was signed from this Server
      jwt.verify(token, `${process.env.JWT_SECRET}`, (err: any, user: any) => {
        if (err) {
          apiResponse.success = false;
          apiResponse.message = "can't verify this email!";
          apiResponse.source = { error: err };
          return res.status(401).json(apiResponse.returner());
        } else {
          console.log("This is the decodedToken " + userId);

          UserModel.findOneAndUpdate({ userId: userId }, { isVerified: true })
            .exec()
            .then((result) => {
              if (result.userId) {
                apiResponse.success = true;
                apiResponse.message = "email verified";
                apiResponse.source = { data: tokenObject.payload };
                return res.status(201).json(apiResponse.returner());
              } else {
                apiResponse.success = false;
                apiResponse.message = "user email doesn't exist";
                return res.status(409).json(apiResponse.returner());
              }
            })
            .catch((e) => {
              apiResponse.success = false;
              apiResponse.message = "user email doesn't exist";
              apiResponse.source = { error: e.message };
              return res.status(409).json(apiResponse.returner());
            });
        }
      });
    } else {
      apiResponse.success = false;
      apiResponse.message = "can't verify this email!";
      return res.status(401).json(apiResponse.returner());
    }
  } catch (error: any) {
    apiResponse.success = false;
    apiResponse.message = "There was an internal server error verifying this";
    apiResponse.source = { error: error.message };

    return res.status(500).json(apiResponse.returner());
  }
};

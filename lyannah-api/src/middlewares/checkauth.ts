import jwt, { VerifyErrors } from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { decodeTokenObject } from "../utils/decode.token";

dotenv.config();
export const checkAuth = (req: Request, res: Response, next: Function) => {
  try {
    if (req.headers.authorization != null || undefined) {
      const token = req.headers.authorization!;
      console.log(token);
      jwt.verify(
        token,
        `${process.env.JWT_SECRET}`,
        (err: jwt.JsonWebTokenError | null, result: any) => {
          if (err) {
            return res.status(401).json({
              success: false,
              message: "unauthorized user!",
              source: { error: err },
            });
          } else {
            req.body["userData"] = decodeTokenObject(
              req.headers.authorization!
            );
            console.log(req.body.userData);
            next();
          }
        }
      );
    } else {
      return res.status(401).json({
        success: false,
        message: "missing authorization header.",
      });
    }
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: "unauthorized user",
      source: { error: error.message },
    });
  }
};

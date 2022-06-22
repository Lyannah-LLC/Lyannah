import express, { json } from "express";
import userRoute from "./routes/user.routes";
import ResponseError from "./utils/error.class";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connect_db } from "./db/connect.db";
import appCollectionRouter from "./routes/app.collection.routes";

dotenv.config();

//Connect to MongoDB
connect_db;
const app = express();

//MIDDLE-WARE
//Use morgan to log stuff in the terminal
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS ERROR
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

//ROUTES
app.use("/users", userRoute);
app.use("/app-collections", appCollectionRouter);

//ERROR HANDLING
//This middleware is executed after checking all the routes above. and what it does is to
//foward a a known error to the error handler MW below.
app.use((req, res, next) => {
  const error = Error("Not found!") as ResponseError;
  error.status = 404;
  next(error);
});

//Error parameter here (err) comes from above
app.use((err: any, req: any, res: any, next: void) => {
  res.statusCode = err.status || 500;
  res.json({
    error: res.statusCode === 500 ? "Internal Server error :(" : err.message,
    status: res.statusCode,
    message: err.message,
  });
});

export = app;

import express from "express";
import mongoose from "mongoose";
import { ApiResponseObject } from "../../utils/response";
import { AppCollectionModel } from "../app_collections/model";
import { DlpDependency } from "./dependencies/model";
const apiResponse: ApiResponseObject = new ApiResponseObject({});

export class AppCollectionService {
  static getAllService(req: express.Request, res: express.Response) {
    apiResponse.reseter();
    //get user Id
    //find the entire collection by user ID.
    //return response to user.
    AppCollectionModel.find({
      user_id: req.body.userData.payload.userId,
    })
      .exec()
      .then((result) => {
        if (result) {
          apiResponse.success = true;
          apiResponse.message = "app-collection successfully queried";
          apiResponse.source = { result: result };
          return res.status(200).json(apiResponse.returner());
        } else {
          apiResponse.success = false;
          apiResponse.message = "no app-collection found for this user";
          apiResponse.source = { result: result };
          return res.status(404).json(apiResponse.returner());
        }
      })
      .catch((error: any) => {
        apiResponse.success = false;
        apiResponse.message =
          "something went wrong fetching this app-collection.";
        apiResponse.source = { error: error.message };
        return res.status(500).json(apiResponse.returner());
      });
  }

  //Create a new App Collection
  static createOneService(req: express.Request, res: express.Response) {
    apiResponse.reseter();
    if (req.body != null || undefined) {
      const appCollection = new AppCollectionModel({
        appCollectionId: new mongoose.Types.ObjectId(),
        user_id: req.body.userData.payload.userId,
        appName: req.body.appName,
        appPlatform: req.body.appPlatform,
        appBranch: req.body.appBranch,
        deployedVersion: req.body.deployedVersion,
        productionDeploys: req.body.productionDeploys,
      });

      //Save AppCollection
      appCollection
        .save()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "collection created successfully";
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message = "something went wrong creating this collection";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }
  //CREATE DEPENDENCY
  static createDependencyService(req: express.Request, res: express.Response) {
    apiResponse.reseter();

    if (req.body != null || undefined) {
      const dependency = new DlpDependency({
        dependencyId: new mongoose.Types.ObjectId(),
        appCollectionId: req.params.appCollectionId,
        devKey: req.body.devKey,
        devValue: req.body.devValue,
        liveKey: req.body.liveKey,
        liveValue: req.body.liveValue,
      });

      dependency
        .save()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "dependency created successfully";
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message = "something went wrong creating this dependency";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }

  //Update App-Collection
  static updateAppCollectionService(
    req: express.Request,
    res: express.Response
  ) {
    apiResponse.reseter();

    if (req.body != null || undefined) {
      AppCollectionModel.findOneAndUpdate(
        { appCollectionId: req.params.appCollectionId },
        {
          $set: {
            appBranch: req.body.appBranch,
            appPlatform: req.body.appPlatform,
            deployedVersion: req.body.deployedVersion,
            productionDeploys: req.body.productionDeploys,
            isDeleted: req.body.isDeleted,
          },
        }
      )
        .exec()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "app-collection updated";
            apiResponse.source = { result: result };
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message =
            "something went wrong updating this app collection";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }

  //Get dependencies
  static getDependencyService(req: express.Request, res: express.Response) {
    apiResponse.reseter();

    DlpDependency.find({
      appCollectionId: req.params.appCollectionId,
    })
      .exec()
      .then((result) => {
        if (result) {
          apiResponse.success = true;
          apiResponse.message = "dependencies successfully queried";
          apiResponse.source = { result: result };
          return res.status(200).json(apiResponse.returner());
        } else {
          apiResponse.success = false;
          apiResponse.message = "no dependencies found for this app-collection";
          apiResponse.source = { result: result };
          return res.status(404).json(apiResponse.returner());
        }
      })
      .catch((error: any) => {
        apiResponse.success = false;
        apiResponse.message = "something went wrong fetching this dependency";
        apiResponse.source = { error: error.message };
        return res.status(500).json(apiResponse.returner());
      });
  }

  //update Dependencies
  static updateDependencyService(req: express.Request, res: express.Response) {
    apiResponse.reseter();

    if (req.body != null || undefined) {
      DlpDependency.findOneAndUpdate(
        { dependencyId: req.params.dependencyId },
        {
          $set: {
            devKey: req.body.devKey,
            devValue: req.body.devValue,
            liveKey: req.body.liveKey,
            liveValue: req.body.liveValue,
            isActive: req.body.isActive,
          },
        }
      )
        .exec()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "dependency updated";
            apiResponse.source = { result: result };
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message = "something went wrong updating this dependency";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }

  //Delete app-collection
  static deleteAppCollection(req: express.Request, res: express.Response) {
    apiResponse.reseter();

    if (req.body != null || undefined) {
      AppCollectionModel.findOneAndUpdate(
        { appCollectionId: req.params.appCollectionId },
        {
          $set: {
            isDeleted: true,
          },
        }
      )
        .exec()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "app-collection deleted";
            // apiResponse.source = { result: result };
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message =
            "something went wrong deleting this app-collection";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }

  //Delete dependency
  static deleteDependency(req: express.Request, res: express.Response) {
    apiResponse.reseter();

    if (req.body != null || undefined) {
      DlpDependency.findOneAndUpdate(
        { dependencyId: req.params.dependencyId },
        {
          isDeleted: true,
        }
      )
        .exec()
        .then((result: any) => {
          if (result) {
            apiResponse.success = true;
            apiResponse.message = "Dependency deleted";
            // apiResponse.source = { result: result };
            return res.status(201).json(apiResponse.returner());
          }
        })
        .catch((error: any) => {
          apiResponse.success = false;
          apiResponse.message = "something went wrong deleting this dependency";
          apiResponse.source = { error: error };

          return res.status(500).json(apiResponse.returner());
        });
    }
  }
}

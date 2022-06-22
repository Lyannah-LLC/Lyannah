import express, { Router } from "express";
import { AppCollectionController } from "../features/app_collections/controller";
import { checkAuth } from "../middlewares/checkauth";

const appCollectionRouter: Router = express.Router();

//Get all app collections for a particular user
appCollectionRouter.get("/", checkAuth, AppCollectionController.getAll);

//create a new app-collection
appCollectionRouter.post(
  "/new-app",
  checkAuth,
  AppCollectionController.createOne
);

//update existing app collection
appCollectionRouter.patch(
  "/:appCollectionId",
  checkAuth,
  AppCollectionController.updateAppCollection
);

//create dependency for a particular app-collection
appCollectionRouter.post(
  "/:appCollectionId/dlp-dependency",
  checkAuth,
  AppCollectionController.createDependency
);

//get dependencies for a particular app-collection
appCollectionRouter.get(
  "/:appCollectionId/dlp-dependency",
  checkAuth,
  AppCollectionController.getDependency
);

//update existing dependency for a particular app-collection
appCollectionRouter.patch(
  "/dlp-dependency/:dependencyId",
  checkAuth,
  AppCollectionController.updateDependency
);

//delete existing dependency for a particular app-collection
appCollectionRouter.delete(
  "/dlp-dependency/:dependencyId",
  checkAuth,
  AppCollectionController.deleteDependency
);

//delete existing app-collection for a particular app-collection
appCollectionRouter.delete(
  "/:appCollectionId",
  checkAuth,
  AppCollectionController.deleteAppCollection
);

export = appCollectionRouter;

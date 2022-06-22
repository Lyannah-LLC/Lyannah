import { Request, Response } from "express";
import { AppCollectionService } from "./service";

export class AppCollectionController {
  //This method helps to get all app collections that is associated to a particular user gotten from the token
  static getAll(req: Request, res: Response, next: Function) {
    return AppCollectionService.getAllService(req, res);
  }
  static createOne(req: Request, res: Response, next: Function) {
    return AppCollectionService.createOneService(req, res);
  }
  static createDependency(req: Request, res: Response, next: Function) {
    return AppCollectionService.createDependencyService(req, res);
  }
  static updateAppCollection(req: Request, res: Response, next: Function) {
    return AppCollectionService.updateAppCollectionService(req, res);
  }
  static getDependency(req: Request, res: Response, next: Function) {
    return AppCollectionService.getDependencyService(req, res);
  }
  static updateDependency(req: Request, res: Response, next: Function) {
    return AppCollectionService.updateDependencyService(req, res);
  }
  static deleteDependency(req: Request, res: Response, next: Function) {
    return AppCollectionService.deleteDependency(req, res);
  }
  static deleteAppCollection(req: Request, res: Response, next: Function) {
    return AppCollectionService.deleteAppCollection(req, res);
  }
}

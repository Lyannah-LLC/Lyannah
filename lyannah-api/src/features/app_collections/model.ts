import mongoose from "mongoose";

const appCollectionSchema: mongoose.Schema = new mongoose.Schema(
  {
    appCollectionId: mongoose.Schema.Types.ObjectId,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      // required: true,
    },
    appName: { type: String, required: true },
    appBranch: { type: String, required: true, default: "dev" },
    appPlatform: { type: String, required: true },
    deployedVersion: { type: String, default: "V1.0.0" },
    productionDeploys: { type: String, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export const AppCollectionModel = mongoose.model(
  "App-Collection",
  appCollectionSchema
);

import mongoose from "mongoose";

const dlpDependency: mongoose.Schema = new mongoose.Schema(
  {
    dependencyId: mongoose.Schema.Types.ObjectId,
    appCollectionId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    devKey: { type: String, required: true, default: null },
    devValue: { type: String, required: true, default: null },
    liveKey: { type: String, required: true, default: null },
    liveValue: { type: String, required: true, default: null },
    prodKey: { type: String },
    prodValue: { type: String },
    isActive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export const DlpDependency = mongoose.model("DLP-Dependency", dlpDependency);

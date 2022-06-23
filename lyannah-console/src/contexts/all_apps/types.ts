import { Dispatch, SetStateAction } from "react";

export interface IAllApps {
  isLoading: boolean;
  isModalOpen: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createNewApp: () => void;
}

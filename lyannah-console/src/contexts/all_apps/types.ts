export interface IAllApps {
  isLoading: boolean;
  isModalOpen: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createNewApp: () => void;
}

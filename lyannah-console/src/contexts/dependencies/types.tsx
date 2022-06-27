export interface IDependency {
  isLoading: boolean;
  isModalOpen: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createDependency: () => void;
  editDependency: () => void;
}

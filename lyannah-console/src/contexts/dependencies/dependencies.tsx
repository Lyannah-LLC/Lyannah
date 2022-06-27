import { useState, createContext } from "react";
import { IDependency } from "./types";

export const DependencyContext = createContext<IDependency>({
  isLoading: false,
  isModalOpen: false,
  createDependency: () => {},
  editDependency: () => {},
  setIsModalOpen: () => false,
  setIsLoading: () => false,
});

export const DependencyContextProvider = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createDependency = () => {
    setModalOpen(false);
  };

  const editDependency = () => {
    //make a request and close modal
    setModalOpen(true);
  };

  const context: IDependency = {
    isModalOpen: modalOpen,
    isLoading: isLoading,
    setIsModalOpen: setModalOpen,
    setIsLoading: setIsLoading,
    createDependency: createDependency,
    editDependency: editDependency,
  };

  return (
    <DependencyContext.Provider value={context}>
      {props.children}
    </DependencyContext.Provider>
  );
};

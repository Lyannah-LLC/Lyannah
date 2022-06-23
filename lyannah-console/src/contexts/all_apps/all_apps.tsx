import { createContext, useState } from "react";
import { IAllApps } from "./types";

//Create a context for all_apps route
export const AllAppsContext = createContext<IAllApps>({
  isLoading: false,
  isModalOpen: false,
  createNewApp: () => {},
  setIsModalOpen: () => false,
  setIsLoading: () => false,
});

//create a provider for above context
export const AllAppsContextProvider = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const handleIsLoading = () => {
  //   setIsLoading(!isLoading);
  // };

  const createNewApp = () => {
    //make a request and close modal
    setModalOpen(false);
  };

  const context: IAllApps = {
    isModalOpen: modalOpen,
    isLoading: isLoading,
    createNewApp: createNewApp,
    setIsModalOpen: setModalOpen,
    setIsLoading: setIsLoading,
  };

  //return the context provider value for the children
  return (
    <AllAppsContext.Provider value={context}>
      {props.children}
    </AllAppsContext.Provider>
  );
};

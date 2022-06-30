import { BoxPadding } from "../../general_components/BoxPadding";
import { Button } from "../../general_components/button";
import { AppCard } from "./AppCard";
import { useContext } from "react";
import { AllAppsContext } from "../../../contexts/all_apps/all_apps";
import { Form } from "../../general_components/Form";
import { Overlay } from "../../general_components/create_new_app/Overlay";

export const AllApps = () => {
  const allApps = [
    {
      id: Math.floor(Math.random() * 100),
      name: "Qollect",
      lastModified: "Last Modified",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Qollect",
      lastModified: "Last Modified",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Qollect",
      lastModified: "Last Modified",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Qollect",
      lastModified: "Last Modified",
    },
  ];
  const allAppsContext = useContext(AllAppsContext);
  const buttonHandler = () => {
    console.log(allAppsContext.isModalOpen);
    allAppsContext.setIsModalOpen(true);
    console.log(allAppsContext.isModalOpen);
  };
  const closeModal = () => {
    allAppsContext.setIsModalOpen(false);
  };

  return (
    <div>
      {allAppsContext.isModalOpen ? (
        <Overlay
          title="Create new app collection"
          child={
            <>
              <Form placeHolder="App Name " />
              <Form placeHolder="App Platform " />
              <Button title="Create App" onClick={closeModal} />
            </>
          }
          onCloseModal={closeModal}
        />
      ) : null}
      <BoxPadding>
        <div className="">
          <div className="md:flex justify-between ">
            <p className="self-center text-lg font-bold">All your apps</p>
            <Button title="New App" width="contain" onClick={buttonHandler} />
          </div>
          <div className="md:flex gap-8 ">
            {allApps.map((e) => (
              <AppCard dependencies={e.id} />
            ))}
          </div>
        </div>
      </BoxPadding>
    </div>
  );
};

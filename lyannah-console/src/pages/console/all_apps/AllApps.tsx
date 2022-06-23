import { BoxPadding } from "../../general_components/BoxPadding";
import { Button } from "../../general_components/button";
import { AppCard } from "./AppCard";
import { useState, useContext } from "react";
import { AllAppsContext } from "../../../contexts/all_apps/all_apps";
import { Form } from "../../general_components/Form";
import { Overlay } from "../../general_components/create_new_app/Overlay";

export const AllApps = () => {
  const allAppsContext = useContext(AllAppsContext);
  const buttonHandler = () => {
    allAppsContext.setIsModalOpen(true);
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
        />
      ) : null}
      <BoxPadding>
        <div className="">
          <div className="md:flex justify-between ">
            <p className="self-center text-lg font-bold">All your apps</p>
            <Button title="New App" width="contain" onClick={buttonHandler} />
          </div>
          <div className="md:flex gap-8 ">
            <AppCard onClick={() => {}} />
            <AppCard />
          </div>
        </div>
      </BoxPadding>
    </div>
  );
};

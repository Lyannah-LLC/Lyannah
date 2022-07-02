import { useContext, useEffect } from "react";
import { DependencyContext } from "../../../../contexts/dependencies/dependencies";
import { Button } from "../../../general_components/button";
import { ConsoleWrapper } from "../../../general_components/console_wrapper/ConsoleWrapper";
import { Form } from "../../../general_components/Form";
import { Tag } from "../../all_apps/Tag";
import { DependencyTable } from "./DependencyTable";
import { EditDependency } from "./EditDependency";

export const DependenciesDisplay = () => {
  const dependencyContext = useContext(DependencyContext);

  const buttonHandler = () => {
    console.log(dependencyContext.isModalOpen);
    dependencyContext.setIsModalOpen(true);
  };

  const closeModal = () => {
    dependencyContext.setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(dependencyContext.isModalOpen);
  }, [dependencyContext.isModalOpen]);
  return (
    <>
      {dependencyContext.isModalOpen ? (
        <EditDependency onCloseModal={closeModal} onSave={closeModal} />
      ) : null}

      <ConsoleWrapper>
        <div className="flex justify-between ">
          <p className="text-3xl font-bold">Qollect</p>
          <Tag title="28 Dependencies" color="blue" />
        </div>
        <p className="text-xl font-bold mt-10">Create Dependency</p>

        <div className="flex gap-4 m">
          <div className="w-full">
            <p className="text-sm font-medium my-4 text-gray-500">Key</p>
            <Form placeHolder="background-image" />
          </div>
          <div className="w-full">
            <p className="text-sm font-medium my-4 text-gray-500">Dev Value</p>
            <Form placeHolder="https://myserver/live.jpg" />
          </div>
          <div className="w-full">
            <p className="text-sm font-medium my-4 text-gray-500">Live Value</p>
            <Form placeHolder="https://myserver/test.jpg" />
            <Button title="Create Dependency" />
          </div>
        </div>
        <DependencyTable onClick={buttonHandler} />
      </ConsoleWrapper>

      {/* </div> */}
    </>
  );
};

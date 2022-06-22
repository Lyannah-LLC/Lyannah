import { Button } from "../../../general_components/button";
import { Form } from "../../../general_components/Form";
import { Tag } from "../../all_apps/Tag";
import { DependencyTable } from "./DependencyTable";
import { EditDependency } from "./EditDependency";

export const DependenciesDisplay = () => {
  return (
    <>
      <EditDependency />
      <div className="ml-64 2xl:ml-96 w-full">
        <div className="mainScreen h-screen w-full max-w-screen-2xl  m-auto px-10 pt-12">
          <div className="flex justify-between ">
            <p className="text-3xl font-bold">Qollect</p>
            <Tag title="28 Dependencies" />
          </div>
          <p className="text-xl font-bold mt-10">Create Dependency</p>

          <div className="flex gap-4 m">
            <div className="w-full">
              <p className="text-sm font-medium my-4 text-gray-500">Key</p>
              <Form placeHolder="background-image" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium my-4 text-gray-500">
                Dev Value
              </p>
              <Form placeHolder="https://myserver/live.jpg" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium my-4 text-gray-500">
                Live Value
              </p>
              <Form placeHolder="https://myserver/test.jpg" />
              <Button title="Create Dependency" />
            </div>
          </div>
          <DependencyTable />
        </div>
      </div>
    </>
  );
};

import { Button } from "../../../../components/button";
import { Overlay } from "../../../../components/create_new_app/Overlay";
import { DeleteDependency } from "../../../../components/delete_dependency/DeleteDependency";
import { Form } from "../../../../components/Form";
import { Toggle } from "../../../../components/toggle/Toggle";

export const EditDependency = (props: any) => {
  return (
    <Overlay
      title="Edit dependency"
      onCloseModal={props.onCloseModal}
      child={
        <>
          <Form placeHolder="Key " />
          <Form placeHolder="Dev value " />
          <Form placeHolder="Live value " />
          <Button title="Save" onClick={props.onSave} />
          <hr className="text-grey-650 my-6" />
          <div className="text-white text-sm">
            {/* <h3>Delete Dependency</h3> */}
            <p
              className="text-center text-lemon-100 mt-10 mb-4 underline cursor-pointer"
              onClick={() => console.log("More was clicked")}
            >
              Danger Zone
            </p>
            <div className="flex justify-between my-6">
              <h3>Deactivate Dependency</h3>
              <Toggle />
            </div>
            <DeleteDependency />
          </div>
        </>
      }
    />
  );
};

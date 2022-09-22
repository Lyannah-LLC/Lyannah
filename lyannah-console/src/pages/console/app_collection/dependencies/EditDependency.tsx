import { Button } from "../../../../components/button";
import { Overlay } from "../../../../components/create_new_app/Overlay";
import { Form } from "../../../../components/Form";

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
            <h3>Delete Dependency</h3>
            <h3>Deactivate Dependency</h3>
          </div>
        </>
      }
    />
  );
};

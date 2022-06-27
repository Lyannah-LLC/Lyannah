import { Button } from "../../../general_components/button";
import { Overlay } from "../../../general_components/create_new_app/Overlay";
import { Form } from "../../../general_components/Form";

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
        </>
      }
    />
  );
};

import { Button } from "../../../general_components/button";
import { Overlay } from "../../../general_components/create_new_app/Overlay";
import { Form } from "../../../general_components/Form";

export const EditDependency = () => {
  return (
    <Overlay
      title="Edit dependency"
      child={
        <>
          <Form placeHolder="Key " />
          <Form placeHolder="Dev value " />
          <Form placeHolder="Live value " />
          <Button title="Create App" />
        </>
      }
    />
  );
};

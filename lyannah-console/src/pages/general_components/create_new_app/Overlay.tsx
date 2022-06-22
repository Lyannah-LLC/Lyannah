import { Form } from "../Form";
import { ModalCard } from "../modal_card/Modal_card";
import classes from "./Overlay.module.css";

export const Overlay = (props: any) => {
  return (
    <>
      <div className={`${classes.overlay}`} />
      <ModalCard title={props.title} child={<>{props.child}</>} />
    </>
  );
};

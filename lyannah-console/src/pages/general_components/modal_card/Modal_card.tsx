import { Button } from "../button";
import { Form } from "../Form";
import classes from "./ModalCard.module.css";
export const ModalCard = (props: any) => {
  return (
    <div
      className={`flex w-full h-full justify-center m-auto items-center  ${classes.invisibleOverlay}`}
      onClick={props.onClick}
    >
      <div className={`p-8 ${classes.modalCard} `}>
        <div className="flex justify-between justify-items-center mb-10  cursor:pointer">
          <p className="font-bold ">{props.title}</p>
          <img src="../images/close.svg" className="block" />
        </div>
        {props.child}
      </div>
    </div>
  );
};

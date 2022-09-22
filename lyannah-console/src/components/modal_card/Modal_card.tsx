import { Button } from "../button";
import { Form } from "../Form";
import classes from "./ModalCard.module.css";

export const ModalCard = (props: any) => {
  return (
    <div
      className={`flex w-full h-full justify-center m-auto items-center  ${classes.invisibleOverlay}`}
      onClick={props.onClick}
    >
      <div className={`p-8 ${classes.modalCard} bg-grey-950`}>
        <div className="flex justify-between justify-items-center mb-10  cursor:pointer">
          <p className="font-bold ">{props.title}</p>
          <div className="cursor-pointer">
            <img
              src="../images/close.svg"
              className="block "
              onClick={props.onCloseModal}
            />
          </div>
        </div>
        {props.child}
      </div>
    </div>
  );
};

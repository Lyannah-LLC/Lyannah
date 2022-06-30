import classes from "./SideBarContent.module.css";

export const SideBarContents = (props: any) => {
  return (
    <div
      className={`flex py-4 pl-4 ${
        props.isActive ? null : classes.sideBarContent
      } ${props.isActive ? classes.active : null}`}
      onClick={props.onClick}
    >
      <img src={`../images/${props.icon}`} className="mr-4 block" />
      <div className="text-white">{props.title} </div>
    </div>
  );
};

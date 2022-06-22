import classes from "./SideBarContent.module.css";

export const SideBarContents = (props: any) => {
  return (
    <div
      className={`flex py-4 pl-4 ${classes.sideBarContent} ${
        props.isActive ? classes.active : null
      }`}
    >
      <img src={`../images/${props.icon}`} className="mr-4 block" />
      <div className="text-white">{props.title} </div>
    </div>
  );
};

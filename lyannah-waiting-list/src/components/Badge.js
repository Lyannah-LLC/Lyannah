import classes from "./Badge.module.css";
export const Badge = (props) => {
  return <div className={`${classes.badge} p-2 text-xs`}>{props.title}</div>;
};

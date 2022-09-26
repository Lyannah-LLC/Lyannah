import { Tag } from "./Tag";
import classes from "./AppCard.module.css";
import { Link } from "react-router-dom";

export const AppCard = (props: any) => {
  return (
    <Link to="/console/app-collection">
      <div
        className={`rounded-3xl p-6 border w-5/6 mx-auto mb-12 md:w-72  ${classes.AppCard}`}
        onClick={props.onClick}
      >
        <div className="flex justify-between items-center text-lemon-100 font-bold">
          <Tag title={props.dependencies + " dependencies"} color="green" />
          {/* <img src="../images/more.svg" /> */}
        </div>
        <p className="font-bold mb-2 mt-8 text-white">Qollect</p>
        <p className="text-xs text-grey-650">Last Modified</p>
      </div>
    </Link>
  );
};

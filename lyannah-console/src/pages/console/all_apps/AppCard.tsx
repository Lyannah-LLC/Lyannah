import { Tag } from "./Tag";
import classes from "./AppCard.module.css";
import { Link } from "react-router-dom";

export const AppCard = (props: any) => {
  return (
    <Link to="/console/app-collection">
      <div
        className={`rounded-3xl border-gray-300 p-6 border w-72 ${classes.AppCard}`}
        onClick={props.onClick}
      >
        <div className="flex justify-between items-center">
          <Tag title={props.dependencies + " dependencies"} color="blue" />
          {/* <img src="../images/more.svg" /> */}
        </div>
        <p className="font-bold mb-2 mt-8">Qollect</p>
        <p className="text-xs text-gray-400">Last Modified</p>
      </div>
    </Link>
  );
};

import { Tag } from "./Tag";
import classes from "./AppCard.module.css";
import { Link } from "react-router-dom";

export const AppCard = (props: any) => {
  const allApps = [
    { id: Math.random(), name: "Qollect", lastModified: "Last Modified" },
    { id: Math.random(), name: "Qollect", lastModified: "Last Modified" },
    { id: Math.random(), name: "Qollect", lastModified: "Last Modified" },
    { id: Math.random(), name: "Qollect", lastModified: "Last Modified" },
  ];

  return (
    <>
      {allApps.map((dependencies) => (
        <Link to="/console/app-collection">
          <div
            className={`rounded-3xl border-gray-300 p-6 border w-full ${classes.AppCard} app-card`}
            onClick={props.onClick}
            key={dependencies.id}
          >
            <div className="flex justify-between items-center">
              <Tag />
              {/* <img src="../images/more.svg" /> */}
            </div>
            <p className="font-bold mb-2 mt-8">{dependencies.name}</p>
            <p className="text-xs text-gray-400">{dependencies.lastModified}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

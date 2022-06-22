import classes from "../AppCollection.module.css";
import { SideBarContents } from "./SideBarContents";

export const SideBar = () => {
  return (
    <div className={`${classes.sideNav} h-screen w-64 2xl:w-96 bg-black pt-8`}>
      <SideBarContents
        icon="coin-stack.svg"
        title="Dependency"
        isActive={true}
      />
      <SideBarContents
        icon="bar-chart-2.svg"
        title="Analytics"
        isActive={false}
      />
      <SideBarContents icon="doc.svg" title="Docs" isActive={false} />
      <SideBarContents icon="settings.svg" title="Settings" isActive={false} />
      <SideBarContents icon="log-out.svg" title="Logout" isActive={false} />
    </div>
  );
};

import { SideBarComps } from "../../../../util/sideBarEnum";
import classes from "../AppCollection.module.css";
import { SideBarContents } from "./SideBarContents";
import { useContext, useEffect } from "react";
import { SideBarContext } from "../../../../contexts/sideBar/sideBar";
import { DependenciesDisplay } from "../dependencies/DependencyDisplay";
import { AnalyticsView } from "../analytics/Analytics";
import { LogoutView } from "../logout/logout";
import { SettingsView } from "../settings/settings";

export const SideBar = (props: any) => {
  const sideBarContext = props.context;

  const handleClick = (selectedNav: any) => {
    sideBarContext.setClickedNav(selectedNav);
  };

  useEffect(() => {
    console.log("This has been clicked:" + sideBarContext.clickedNav);
  });

  return (
    <div className={`${classes.sideNav} h-screen w-64 2xl:w-96 bg-black pt-8`}>
      <SideBarContents
        icon="coin-stack.svg"
        title="Dependency"
        isActive={
          sideBarContext.clickedNav == SideBarComps.Dependency ? true : false
        }
        onClick={() => {
          handleClick(SideBarComps.Dependency);
        }}
      />
      <SideBarContents
        icon="bar-chart-2.svg"
        title="Analytics"
        isActive={
          sideBarContext.clickedNav == SideBarComps.Analytics ? true : false
        }
        onClick={() => {
          handleClick(SideBarComps.Analytics);
        }}
      />
      <SideBarContents
        icon="doc.svg"
        title="Docs"
        isActive={sideBarContext.clickedNav == SideBarComps.Docs ? true : false}
        onClick={() => {
          handleClick(SideBarComps.Docs);
        }}
      />
      <SideBarContents
        icon="settings.svg"
        title="Settings"
        isActive={
          sideBarContext.clickedNav == SideBarComps.Settings ? true : false
        }
        onClick={() => {
          handleClick(SideBarComps.Settings);
        }}
      />
      <SideBarContents
        icon="log-out.svg"
        title="Logout"
        isActive={
          sideBarContext.clickedNav == SideBarComps.Logout ? true : false
        }
        onClick={() => {
          handleClick(SideBarComps.Logout);
        }}
      />
    </div>
  );
};

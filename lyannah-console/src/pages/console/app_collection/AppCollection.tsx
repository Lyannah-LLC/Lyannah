import { useContext, useEffect } from "react";
import { DependencyContextProvider } from "../../../contexts/dependencies/dependencies";
import { SideBarContext } from "../../../contexts/sideBar/sideBar";
import { SideBarComps } from "../../../util/sideBarEnum";
import { NavigationBar } from "../../general_components/NavigationBar";
import { AnalyticsView } from "./analytics/Analytics";
import classes from "./AppCollection.module.css";
import { DependenciesDisplay } from "./dependencies/DependencyDisplay";
import { SDKsView } from "./SDKs/SDKs";
import { LogoutView } from "./logout/logout";
import { SettingsView } from "./settings/settings";
import { SideBar } from "./side_bar/SideBar";

export const AppCollection = (props: any) => {
  console.log("This component was rebuilt");
  const sideBarContext = useContext(SideBarContext);

  const setView = () => {
    console.log("The setView called");

    if (sideBarContext.clickedNav === SideBarComps.Dependency) {
      return <DependenciesDisplay />;
    } else if (sideBarContext.clickedNav === SideBarComps.Analytics) {
      return <AnalyticsView />;
    } else if (sideBarContext.clickedNav === SideBarComps.SDKs) {
      return <SDKsView logoUrl="../images/flutter.svg" />;
    } else if (sideBarContext.clickedNav === SideBarComps.Settings) {
      return <SettingsView />;
    } else if (sideBarContext.clickedNav === SideBarComps.Logout) {
      return <LogoutView />;
    }
  };

  return (
    <DependencyContextProvider>
      <div className="relative">
        {/**  Edit dependency overlay below **/}
        {/* <EditDependency /> */}
        <div className="absolute top-[3rem]">
          <div className={`${classes.fixedNav}`}>
            <NavigationBar />
          </div>

          <div className={`flex`}>
            <SideBar context={sideBarContext} />
            {setView()}
            {/* <DependenciesDisplay /> */}
          </div>
        </div>
      </div>
    </DependencyContextProvider>
  );
};

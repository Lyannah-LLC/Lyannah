import { useContext, useEffect } from "react";
import { DependencyContextProvider } from "../../../contexts/dependencies/dependencies";
import { SideBarContext } from "../../../contexts/sideBar/sideBar";
import { SideBarComps } from "../../../util/sideBarEnum";
import { NavigationBar } from "../../general_components/NavigationBar";
import classes from "./AppCollection.module.css";
import { DependenciesDisplay } from "./dependencies/DependencyDisplay";
import { LogoutView } from "./logout/logout";
import { SettingsView } from "./settings/settings";
import { SideBar } from "./side_bar/SideBar";

export const AppCollection = (props: any) => {
  console.log("This component was rebuilt");
  const sideBarContext = useContext(SideBarContext);

  const setView = () => {
    console.log("The setView called");

    if (sideBarContext.clickedNav == SideBarComps.Dependency) {
      return <DependenciesDisplay />;
    } else if (sideBarContext.clickedNav == SideBarComps.Analytics) {
    } else if (sideBarContext.clickedNav == SideBarComps.Docs) {
      return <DependenciesDisplay />;
    } else if (sideBarContext.clickedNav == SideBarComps.Settings) {
      return <SettingsView />;
    } else if (sideBarContext.clickedNav == SideBarComps.Logout) {
      return <LogoutView />;
    }
  };

  return (
    <>
      <DependencyContextProvider>
        <div className="mt-16">
          <div className={`${classes.fixedNav}`}>
            <NavigationBar />
          </div>

          <div className={`flex`}>
            <SideBar context={sideBarContext} />
            {setView()}
            {/* <DependenciesDisplay /> */}
          </div>
        </div>
      </DependencyContextProvider>
    </>
  );
};

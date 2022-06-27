import { DependencyContextProvider } from "../../../contexts/dependencies/dependencies";
import { SideBarContextProvider } from "../../../contexts/sideBar/sideBar";
import { Overlay } from "../../general_components/create_new_app/Overlay";
import { Form } from "../../general_components/Form";
import { NavigationBar } from "../../general_components/NavigationBar";
import classes from "./AppCollection.module.css";
import { DependenciesDisplay } from "./dependencies/DependencyDisplay";
import { EditDependency } from "./dependencies/EditDependency";
import { SideBar } from "./side_bar/SideBar";

export const AppCollection = (props: any) => {
  return (
    <>
      <SideBarContextProvider>
        <DependencyContextProvider>
          {/* Edit dependency overlay below */}
          {/* <EditDependency /> */}
          <div className="mt-16">
            <div className={`${classes.fixedNav}`}>
              <NavigationBar />
            </div>

            <div className={`flex`}>
              <SideBar />
              <DependenciesDisplay />
            </div>
          </div>
        </DependencyContextProvider>
      </SideBarContextProvider>
    </>
  );
};

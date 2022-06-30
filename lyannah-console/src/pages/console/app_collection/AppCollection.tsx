import { DependencyContextProvider } from "../../../contexts/dependencies/dependencies";
import { Overlay } from "../../general_components/create_new_app/Overlay";
import { Form } from "../../general_components/Form";
import { NavigationBar } from "../../general_components/NavigationBar";
import classes from "./AppCollection.module.css";
import { DependenciesDisplay } from "./dependencies/DependencyDisplay";
import { EditDependency } from "./dependencies/EditDependency";
import { SideBar } from "./side_bar/SideBar";

export const AppCollection = (props: any) => {
  return (
    <DependencyContextProvider>
      <div className="relative">
        {/*  Edit dependency overlay below */}
        {/* <EditDependency /> */}
        <div className="absolute top-[3rem]">
          <div className={`${classes.fixedNav}`}>
            <NavigationBar />
          </div>

          <div className={`flex w-[100vw]`}>
            <SideBar />
            <DependenciesDisplay />
          </div>
        </div>
      </div>
    </DependencyContextProvider>
  );
};

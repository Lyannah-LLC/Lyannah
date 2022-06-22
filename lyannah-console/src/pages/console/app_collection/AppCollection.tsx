import { Overlay } from "../../general_components/create_new_app/Overlay";
import { Form } from "../../general_components/Form";
import { NavigationBar } from "../../general_components/NavigationBar";
import classes from "./AppCollection.module.css";
import { DependenciesDisplay } from "./dependencies/AppCollectionDisplay";
import { EditDependency } from "./dependencies/EditDependency";
import { SideBar } from "./side_bar/SideBar";

export const AppCollection = (props: any) => {
  return (
    <>
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
    </>
  );
};

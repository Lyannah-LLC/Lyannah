import { AllAppsContextProvider } from "../../contexts/all_apps/all_apps";
import { DependencyContextProvider } from "../../contexts/dependencies/dependencies";
import { Button } from "../../components/button";
import { Overlay } from "../../components/create_new_app/Overlay";
import { Form } from "../../components/Form";
import { ModalCard } from "../../components/modal_card/Modal_card";
import { NavigationBar } from "../../components/NavigationBar";
import { AllApps } from "./all_apps/AllApps";
// import platform from 'platform-detect'
export const Console = () => {
  // if(){

  // }
  return (
    <div>
      <NavigationBar />
      <DependencyContextProvider>
        <AllAppsContextProvider>
          <AllApps />
        </AllAppsContextProvider>
      </DependencyContextProvider>
    </div>
  );
};

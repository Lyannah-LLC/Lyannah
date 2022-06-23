import { AllAppsContextProvider } from "../../contexts/all_apps/all_apps";
import { Button } from "../general_components/button";
import { Overlay } from "../general_components/create_new_app/Overlay";
import { Form } from "../general_components/Form";
import { ModalCard } from "../general_components/modal_card/Modal_card";
import { NavigationBar } from "../general_components/NavigationBar";
import { AllApps } from "./all_apps/AllApps";
// import platform from 'platform-detect'
export const Console = () => {
  // if(){

  // }
  return (
    <div>
      <NavigationBar />
      <AllAppsContextProvider>
        <AllApps />
      </AllAppsContextProvider>
    </div>
  );
};

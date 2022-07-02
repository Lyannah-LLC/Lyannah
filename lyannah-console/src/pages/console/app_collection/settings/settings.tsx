import { ConsoleWrapper } from "../../../general_components/console_wrapper/ConsoleWrapper";
import { TabBar } from "./TabBar";

export const SettingsView = (props: any) => {
  return (
    <ConsoleWrapper>
      <p className="text-3xl font-bold">Settings</p>

      <TabBar tabChildren="" />
      <div className="gbg-blue-10 px-10 py-5 rounded-3xl text-xs mt-6">
        Click to copy
      </div>
    </ConsoleWrapper>
  );
};

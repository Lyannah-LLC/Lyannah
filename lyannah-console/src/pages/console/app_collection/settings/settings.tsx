import { ConsoleWrapper } from "../../../general_components/console_wrapper/ConsoleWrapper";

export const SettingsView = (props: any) => {
  return (
    <ConsoleWrapper>
      <p className="text-3xl font-bold">Settings</p>

      <p>Api Key</p>
      <div className="bg-blue-300 p-20 rounded-3xl ">Text</div>
    </ConsoleWrapper>
  );
};

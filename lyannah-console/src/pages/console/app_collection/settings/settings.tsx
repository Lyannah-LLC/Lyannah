import { ConsoleWrapper } from "../../../../components/console_wrapper/ConsoleWrapper";
import { TabBar } from "./TabBar";

export const SettingsView = (props: any) => {
  return (
    <ConsoleWrapper>
      <p className="text-3xl font-bold">Settings</p>

      <TabBar tabChildren="" />
      <div className="gbg-blue-10 px-10 py-5 rounded-3xl mt-6 max-w-[1000px]">
        <p className="text-xs"> Click to copy</p>
        <div className="rounded-md gbg-blue-30 p-2 self-start inline-block mt-6 ">
          <img src="../images/copy.svg" className="block" />
        </div>
        <div className="flex mt-2 ">
          <p className="text-xl font-bold  overflow-x-scroll text-clip">
            xPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfcxPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfcxPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfcxPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfcxPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfcxPxmzyamajfvosdjfbsunhiwuhxaihnfcaifnxixfc
          </p>
        </div>
      </div>
    </ConsoleWrapper>
  );
};

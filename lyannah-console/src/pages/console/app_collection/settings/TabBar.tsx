import { TabBarChild } from "./TabChild";

export const TabBar = ({ tabChildren: any }) => {
  return (
    <div className="flex gap-4 mt-6 ">
      <TabBarChild title="API Key" isActive={true} />
      <TabBarChild title="Profile" isActive={false} />
    </div>
  );
};

import { Button } from "../../../general_components/button";
import { Tag } from "../../all_apps/Tag";

export const AnalyticsView = (props: any) => {
  return (
    <>
      <div className="ml-64 2xl:ml-96 w-full ">
        <div className="mainScreen h-screen w-full max-w-screen-2xl m-auto px-10 pt-12 ">
          <div className="flex mb-10">
            <p className="text-3xl font-bold mr-2">Analytics</p>
            <Tag title="coming soon" />
          </div>
          <div className="flex flex-col items-center self-center  ">
            <img src="../images/shipping.svg" className=" w-80 mb-10" />
            <p className="mb-4 font-bold "> This feature is still shipping</p>
            <p className="">
              This feature allows you monitor your app in real-time
            </p>
            <Button width="contain" title="Inform me when it's here!" />
          </div>
        </div>
      </div>
    </>
  );
};

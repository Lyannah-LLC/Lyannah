import { ButtonTypes } from "../../../../util/buttonTypes";
import { Button } from "../../../general_components/button";
import { ConsoleWrapper } from "../../../general_components/console_wrapper/ConsoleWrapper";
import { Tag } from "../../all_apps/Tag";

export const LogoutView = (props: any) => {
  return (
    <>
      <ConsoleWrapper>
        <div className="flex mb-10">
          <p className="text-3xl font-bold mr-2">Logout</p>
        </div>
        <div className="flex flex-col items-center self-center  ">
          <img src="../images/sun-set.svg" className=" w-80 mb-10" />
          <p className="mb-4 font-bold "> Be back soon okay ?</p>

          <Button
            width="contain"
            title="Leave"
            buttonType={ButtonTypes.negative}
          />
        </div>
      </ConsoleWrapper>
    </>
  );
};

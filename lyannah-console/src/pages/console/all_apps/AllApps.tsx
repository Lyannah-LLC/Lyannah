import { BoxPadding } from "../../general_components/BoxPadding";
import { Button } from "../../general_components/button";
import { NavigationBar } from "../../general_components/NavigationBar";
import { AppCard } from "./AppCard";
import { useState } from "react";
import { Overlay } from "../../general_components/create_new_app/Overlay";
import { Link } from "react-router-dom";

export const AllApps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonHandler = () => {
    setIsOpen(true);
  };

  const onClickHandler = () => {
    //Do nothing
  };

  return (
    <div>
      <BoxPadding>
        <div className="">
          <div className="md:flex justify-between ">
            <p className="self-center text-lg font-bold">All your apps</p>
            <Button title="New App" width="contain" onClick={buttonHandler} />
          </div>
          <div className="md:flex gap-8 ">
            <AppCard onClick={onClickHandler} />
            <AppCard />
          </div>
        </div>
      </BoxPadding>
    </div>
  );
};

import { createContext, useState } from "react";
import { SideBarComps } from "../../util/sideBarEnum";

export const SideBarContext = createContext({
  clickedNav: undefined,
  setClickedNav: (comp: any) => undefined,
});

export const SideBarContextProvider = (props: any) => {
  const [clickedNav, setClickedNav] = useState(SideBarComps.Dependency);

  const setActiveComp = (comp: any) => {
    setClickedNav(comp);
  };

  const context: any = {
    clickedNav: clickedNav,
    setClickedNav: setActiveComp,
  };

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  );
};

import { BoxPadding } from "./BoxPadding";

export const NavigationBar = (props: any) => {
  return (
    <header
      className={`$ w-full font-bold md:h-14 h-8 p-8  flex justify-between items-center flex-row md:text-lg text-sm bg-black`}
    >
      <div className="logo">
        <img src="../images/logo.png" className="md:scale-100" />
      </div>
      <div className="flex">
        <p className="text-white font-normal text-sm mr-6">Katarina Rostova</p>
        <img src="../images/user-drop-down.svg" className="md:scale-90" />
      </div>
    </header>
  );
};

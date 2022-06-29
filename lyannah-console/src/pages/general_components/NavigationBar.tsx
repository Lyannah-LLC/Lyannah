

export const NavigationBar = (props: any) => {
  return (
    <header
      className={`$ w-full font-bold h-14 flex justify-between items-center flex-row md:text-lg text-sm bg-black px-[5rem] navbar`}
    >
      <div className="logo">
        <img src="../images/logo.png" className="md:scale-100" />
      </div>
      <div className="flex">
        <p className="text-white font-semibold text-[16px] mr-6">Katarina Rostova</p>
        <img src="../images/user-drop-down.svg" className="md:scale-90" />
      </div>
    </header>
  );
};

import classes from "./navigationbar.module.css";

export const NavigationBar = (props) => {
  return (
    <header
      className={`${classes.nav}  w-full font-bold md:h-14 h-8 p-10 px-40 flex justify-start items-center flex-row md:text-lg text-sm`}
    >
      <div className="logo">
        <img src="../logo.png" className="md:scale-100 scale-150" />
      </div>
    </header>
  );
};

//md:text-lg text-sm
//On medium screens and above text-lg is used, otherwise text-sm is used on all other dimensions

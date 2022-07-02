export const ConsoleWrapper = ({ children }) => {
  return (
    <div className="ml-64 2xl:ml-96 w-full  ">
      <div className="mainScreen h-screen max-w-screen-2xl m-auto px-10 pt-12 ">
        {children}
      </div>
    </div>
  );
};

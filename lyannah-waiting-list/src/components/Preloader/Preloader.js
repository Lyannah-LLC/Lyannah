import "./PreLoader.css";

export const Preloader = (props) => {
  return (
    <div className="preloader flex justify-items-center content-center w-14">
      <div className="loader">
        <img src="../../../preloader.svg" className="block" />
      </div>
    </div>
  );
};

import "./BoxPadding.css";
export const BoxPadding = (props) => {
  return (
    <div className="md:max-w-screen-2xl  box-padding ">{props.children}</div>
  );
};

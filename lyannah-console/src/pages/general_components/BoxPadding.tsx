import "./BoxPadding.css";

export const BoxPadding = (props: any) => {
  return (
    <div className="md:max-w-screen-xl  box-padding   ">{props.children}</div>
  );
};

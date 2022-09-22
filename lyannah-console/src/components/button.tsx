import { ButtonTypes } from "../util/buttonTypes";

export const Button = (props: any) => {
  return (
    <button
      type="submit"
      className={`py-1 px-2 rounded-[4px] font-regular md:flex-grow-0 flex-grow text-sm hover:opacity-80 transition-opacity duration-150 ${
        props.buttonType == ButtonTypes.negative ? "bg-red-700" : "bg-iris-350"
      } 
     
      ${props.width == "contain" ? null : "w-full"} my-8 text-white text-ss`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

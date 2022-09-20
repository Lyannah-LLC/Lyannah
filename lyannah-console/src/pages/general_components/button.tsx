import { ButtonTypes } from "../../util/buttonTypes";

export const Button = (props: any) => {
  return (
    <button
      type="submit"
      className={`py-2 px-2 rounded-[4px] font-regular md:flex-grow-0 flex-grow text-xs hover:opacity-80 transition-opacity duration-150 ${
        props.buttonType == ButtonTypes.negative ? "bg-red-700" : "bg-iris-350"
      } 
     
      ${
        props.width == "contain" ? null : "w-full"
      } my-8 text-white text-[16px]`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

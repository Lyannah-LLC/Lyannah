export const Button = (props: any) => {
  return (
    <button
      type="submit"
      className={`py-4 px-10 rounded-[10px] font-bold md:flex-grow-0 flex-grow bg-black ${
        props.width == "contain" ? null : "w-full"
      } my-8 text-white text-[16px]`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

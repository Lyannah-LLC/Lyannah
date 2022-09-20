import classes from "./Form.module.css";

export const Form = (props: any) => {
  return (
    <input
      type={props.type}
      id="fname"
      name="fname"
      placeholder={props.placeHolder}
      // ref={emailDataRef}
      className={`md:px-5 md:mb-0 mb-5 p-2 my-4 text-[12px] text-white ${
        props.width == "contain" ? null : "w-full"
      } h-10 rounded-t-[5px] block border-b-2 border-grey-900 focus:border-iris-350 bg-grey-900 ${
        classes.input_form
      }`}
      required
    />
  );
};

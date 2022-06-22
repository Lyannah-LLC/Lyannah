import classes from "./Form.module.css";

export const Form = (props: any) => {
  return (
    <input
      type="text"
      id="fname"
      name="fname"
      placeholder={props.placeHolder}
      // ref={emailDataRef}
      className={`md:px-5 md:mb-0 mb-5 p-6 my-4 text-sm ${
        props.width == "contain" ? null : "w-full"
      } h-12 rounded-t-md block border-b-2  focus:border-black ${
        classes.input_form
      }`}
      required
    ></input>
  );
};

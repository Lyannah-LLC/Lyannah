import "./SocialAuthButton.module.css";
export const SocialAuthButton = (props: any) => {
  return (
    <div
      className="flex w-full justify-between rounded-md border-black items-center border px-8 my-6 hover:bg-green-100 
    duration-300 socialButtonAuth w-full cursor: pointer "
    >
      <img src={`../images/${props.iconName}`} className="h-6 mx-8"></img>
      <p className="text-sm my-2">{props.buttonTitle}</p>
    </div>
  );
};

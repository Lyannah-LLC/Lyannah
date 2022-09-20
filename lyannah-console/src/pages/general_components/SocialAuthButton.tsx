export const SocialAuthButton = (props: any) => {
  return (
    <div
      className="w-full rounded-[2px] border-[#999] border my-6 hover:bg-grey-900 text-xs
    duration-300 socialButtonAuth cursor-pointer flex justify-start items-center py-[2px] px-[22px]"
    >
      <img src={`../images/${props.iconName}`} className="h-6" />
      <p className="text-xs ml-[5rem]">{props.buttonTitle}</p>
    </div>
  );
};

export const SocialAuthButton = (props: any) => {
  return (
    <div
      className="w-full rounded-[10px] border-[#999] border my-6 hover:bg-green-100 
    duration-300 socialButtonAuth cursor-pointer flex justify-start items-center py-[10px] px-[20px]"
    >
      <img src={`../images/${props.iconName}`} className="h-6" />
      <p className="text-[16px] ml-[5rem]">{props.buttonTitle}</p>
    </div>
  );
};

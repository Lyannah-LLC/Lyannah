export const TabBarChild = ({ title, isActive }) => {
  return (
    <div className="flex flex-col gap-1 p-4 ">
      <div>{title}</div>

      <div
        className={`w-full h-[2px] rounded-3xl  ${
          isActive ? "gbg-green" : null
        }`}
      ></div>
    </div>
  );
};

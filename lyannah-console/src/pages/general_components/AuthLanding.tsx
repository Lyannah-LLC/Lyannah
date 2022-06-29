import "./AuthLanding.css";
export const AuthLanding = () => {
  return (
    <div className="w-full md:flex justify-center items-start relative hidden">
      <img src={`../images/blur-background.svg`} className="block" />
      <div className="absolute authLanding-mainHeader">
        <p className="font-semibold text-4xl">
          Ship Dynamic Apps without Redeployment
        </p>
        <p className="text-lg text-black mt-[2rem]">
          Shipping apps have never been easier than they are today.
        </p>
      </div>
    </div>
  );
};

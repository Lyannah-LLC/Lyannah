import "./AuthLanding.css";
export const AuthLanding = () => {
  return (
    <div className="mx-6  w-full md:flex justify-center items-start relative hidden">
      <img src={`../images/blur-background.svg`} className="block"></img>
      <div className="absolute  authLanding-mainHeader">
        <p className="text-lg font-semibold my-4  text-4xl">
          Ship Dynamic Apps without Redployment
        </p>
        <p className="text-lg text-black  ">
          Shipping apps have never been easier than they are today.
        </p>
      </div>
    </div>
  );
};

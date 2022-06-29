import { AuthLanding } from "../general_components/AuthLanding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import { SocialAuthButton } from "../general_components/SocialAuthButton";
import classes from "../login/Login.module.css";
import { Link } from "react-router-dom";

export const SignUp = (props: any) => {
  return (
      <div className="text-xl flex justify-between items-center md:flex-row sign-up">
        <div className={`md:w-8/12  flex`}>
          <div className={`w-full inline-flex flex-col ${classes.formBox}`}>
            <img src="../images/logo_black.svg" className="h-12 self-start" />
            <p className="font-semibold mt-[4rem] mb-[1rem] text-[#333333] text-[24px]">
              Let's get you in
            </p>
            <SocialAuthButton
              buttonTitle="Signup with Github"
              iconName="github.svg"
            />
            <SocialAuthButton
              buttonTitle="Signup with Google"
              iconName="google.svg"
            />
            <p className="text-[24px] font-semibold text-center my-4">or</p>
            <Form placeHolder="Email" type="email" />
            <Form placeHolder="Full Name" />
            <Form placeHolder="Password" type="password" />
            <Form placeHolder="Confirm Password" type="password" />
            <Form placeHolder="Business Type" />
            <Button title="Create Account" type="text" />
            <Link to="/login">
              <p
                className={`text-center text-sm font-bold underline  ${classes.color}`}
              >
                Login instead ?
              </p>
            </Link>
            <div className="mt-[1rem]">
              <Link to="/forgot-password">
                <p
                  className={`text-center text-sm font-bold underline ${classes.color}`}
                >
                  Forgot Password ?
                </p>
              </Link>
            </div>
          </div>
        </div>
        <AuthLanding />
      </div>
  );
};

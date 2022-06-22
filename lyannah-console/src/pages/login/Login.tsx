import { AuthLanding } from "../general_components/AuthLanding";
import { BoxPadding } from "../general_components/BoxPadding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import { SocialAuthButton } from "../general_components/SocialAuthButton";
import classes from "../login/Login.module.css";
import { Link } from "react-router-dom";

export const Login = (props: any) => {
  return (
    <BoxPadding>
      <div
        className={`box-border text-xl flex md:flex-row  flex-col  ${classes.parent}  `}
      >
        <div className={`md:w-8/12  flex `}>
          <div
            className={`w-full my-16  inline-flex flex-col   p-6 ${classes.formBox}`}
          >
            <img
              src="../images/logo_black.svg"
              className="h-12 self-start"
            ></img>
            <p className="text-lg font-semibold my-4">Let's get you in</p>
            <SocialAuthButton
              buttonTitle="Signup with Github"
              iconName="github.svg"
            />
            <SocialAuthButton
              buttonTitle="Signup with Google"
              iconName="google.svg"
            />
            <p className="text-lg font-semibold my-4">Or</p>
            <Form placeHolder="Email" />
            <Form placeHolder="Password" />
            <Link to="/console">
              <Button title="Login" />
            </Link>
            <Link to="/register">
              <p className={`text-center text-sm font-bold  ${classes.color}`}>
                Create an account
              </p>
            </Link>
            <Link to="/forgot-password">
              <p className={`text-center text-sm font-bold  ${classes.color}`}>
                Forgot Password
              </p>
            </Link>
          </div>
        </div>
        <AuthLanding />
      </div>
    </BoxPadding>
  );
};

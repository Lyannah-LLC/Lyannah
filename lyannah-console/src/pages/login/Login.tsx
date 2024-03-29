import { AuthLanding } from "../../components/AuthLanding";
import { BoxPadding } from "../../components/BoxPadding";
import { Button } from "../../components/button";
import { Form } from "../../components/Form";
import { SocialAuthButton } from "../../components/SocialAuthButton";
import classes from "../login/Login.module.css";
import { Link } from "react-router-dom";

export const Login = (props: any) => {
  return (
    <BoxPadding>
      <div className="text-xl flex justify-between items-center md:flex-row login text-white">
        <div className={`md:w-8/12  flex`}>
          <div className={`w-full inline-flex flex-col ${classes.formBox}`}>
            <img src="../images/logo_black.svg" className="h-12 self-start" />
            <p className="text-lg font-semibold mt-[4rem] mb-[1rem]  text-[24px] text-white">
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
            <Form placeHolder="Password" type="password" />
            <div className="mt-[1rem]">
              <Link to="/forgot-password">
                <p
                  className={`text-right text-sm font-bold underline text-lemon-100`}
                >
                  Forgot Password ?
                </p>
              </Link>
            </div>
            <Link to="/console">
              <Button title="Login" />
            </Link>
            <Link to="/register">
              <p
                className={`text-center text-sm font-bold underline text-lemon-100`}
              >
                Create an account instead
              </p>
            </Link>
          </div>
        </div>
        <AuthLanding />
      </div>
    </BoxPadding>
  );
};

import { Link } from "react-router-dom";
import { AuthLanding } from "../../components/AuthLanding";
import { BoxPadding } from "../../components/BoxPadding";
import { Button } from "../../components/button";
import { Form } from "../../components/Form";
import { SocialAuthButton } from "../../components/SocialAuthButton";
import classes from "../login/Login.module.css";

export const ForgotPassword = () => {
  return (
    <BoxPadding>
      <div className="text-xl flex justify-between items-center md:flex-row forgotten-password">
        <div className={`md:w-8/12  flex `}>
          <div className={`w-full inline-flex flex-col ${classes.formBox}`}>
            <img
              src="../images/logo_black.svg"
              className="h-12 self-start"
            ></img>
            <p className="mt-[4rem] mb-[1rem] text-[#333333] text-[24px]">
              It’s you again ? 😂 <br /> Don’t worry here to help
            </p>
            <p className="text-[16px] my-4 text-[#333333]">
              Enter the email associated to your account
            </p>

            <Form placeHolder="Email" type="email" />
            <Link to="/verify-email">
              <Button title="Reset Password" />
            </Link>
            <Link to="/login">
              <p
                className={`text-center text-sm font-bold underline text-lemon-100`}
              >
                Login Instead
              </p>
            </Link>
            <Link to="/register">
              <p
                className={`text-center text-sm font-bold mt-[1rem] underline text-lemon-100`}
              >
                Create an account
              </p>
            </Link>
          </div>
        </div>
        <AuthLanding />
      </div>
    </BoxPadding>
  );
};

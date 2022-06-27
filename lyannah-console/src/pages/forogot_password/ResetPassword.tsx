import { AuthLanding } from "../general_components/AuthLanding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import { SocialAuthButton } from "../general_components/SocialAuthButton";
import classes from "../login/Login.module.css";
import { Link } from "react-router-dom";

export const ResetPassword = (props: any) => {
  return (
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
            <p className="text-lg font-semibold my-4">Create New Password</p>

            <p className="text-lg font-semibold my-4">Or</p>
            <Form placeHolder="New Password" />
            <Form placeHolder="Confirm Password" />
            <Link to="/login">
              <Button title="Reset" />
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
  );
};

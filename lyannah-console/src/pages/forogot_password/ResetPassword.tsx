import { AuthLanding } from "../general_components/AuthLanding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import classes from "../login/Login.module.css";
import { Link } from "react-router-dom";
import { BoxPadding } from "../general_components/BoxPadding";

export const ResetPassword = (props: any) => {
  return (
    <BoxPadding>
      <div className="text-xl flex justify-between items-center md:flex-row reset-password">
        <div className={`md:w-8/12  flex `}>
          <div className={`w-full inline-flex flex-col ${classes.formBox}`}>
            <img
              src="../images/logo_black.svg"
              className="h-12 self-start"
            ></img>
            <p className="mt-[4rem] mb-[1rem] text-[#333333] text-[24px]">
              Create New Password
            </p>

            <p className="text-[24px] font-semibold text-center my-4">Or</p>
            <Form placeHolder="New Password" type="password" />
            <Form placeHolder="Confirm Password" type="password" />
            <Link to="/login">
              <Button title="Reset" />
            </Link>
            <Link to="/register">
              <p
                className={`text-center text-sm font-bold mt-[1rem] ${classes.color}`}
              >
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

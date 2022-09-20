import { Link } from "react-router-dom";
import { AuthLanding } from "../general_components/AuthLanding";
import { BoxPadding } from "../general_components/BoxPadding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import classes from "../login/Login.module.css";

export const CheckEmailForPassword = () => {
  return (
    <BoxPadding>
      <div className="text-xl flex justify-between items-center md:flex-row">
        <div className={`md:w-8/12  flex `}>
          <div className={`w-full inline-flex flex-col ${classes.formBox}`}>
            <img
              src="../images/logo_black.svg"
              className="h-12 self-start"
            ></img>
            <p className="font-semibold mt-[4rem] mb-[1rem] text-[#333333] text-[16px]">
              Make sure you don’t forget next time 😒
            </p>
            <p className="text-md my-4">
              Check your inbox for steps to verify your email.
            </p>

            <Link to="/login">
              <Button title="Go back to login" />
            </Link>
            <Link to="/register">
              <p
                className={`text-center text-sm font-bold underline mt-[1rem] text-lemon-100`}
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

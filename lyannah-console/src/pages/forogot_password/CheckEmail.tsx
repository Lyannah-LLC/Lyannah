import { Link } from "react-router-dom";
import { AuthLanding } from "../general_components/AuthLanding";
import { Button } from "../general_components/button";
import { Form } from "../general_components/Form";
import classes from "../login/Login.module.css";

export const CheckEmailForPassword = () => {
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
            <p className="text-lg font-semibold my-4">
              Make sure you don’t forget next time 😒
            </p>
            <p className="text-md my-4">
              Check your inbox for steps to verify your email.
            </p>

            <Link to="/login">
              <Button title="Go back to login" />
            </Link>
            <Link to="/register">
              <p className={`text-center text-sm font-bold  ${classes.color}`}>
                Create an account
              </p>
            </Link>
            <Link to="/login">
              <p className={`text-center text-sm font-bold  ${classes.color}`}>
                Login
              </p>
            </Link>
          </div>
        </div>
        <AuthLanding />
      </div>
  );
};

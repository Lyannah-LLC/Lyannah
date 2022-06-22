import { forgotPasswordHtml } from "../../emails/forgot.password";
import { verifyEmailHtml } from "../../emails/verify.email";
import { emailPayload } from "./email.format";
// import mailgun, { Error } from "mailgun-js";

import { EmailTypes } from "./email.types";

export const sendEmailType = ({ emailType, email, token }: any) => {
  switch (emailType) {
    case EmailTypes.VerifyEmail: {
      return emailPayload({
        from: "Lyannah<noreply@lyannah>",
        to: email,
        subject: "Verify Email Address",
        html: verifyEmailHtml(token),
      });
      break;
    }
    case EmailTypes.ForgotPassword: {
      //statements;
      return emailPayload({
        from: "Lyannah<noreply@lyannah>",
        to: email,
        subject: "Forgot Password",
        html: forgotPasswordHtml(token),
      });
      break;
    }
    case EmailTypes.WelcomeEmail: {
      //statements;
      break;
    }
    default: {
      //statements;
      break;
    }
  }
};

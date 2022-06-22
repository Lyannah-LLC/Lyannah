import mailgun, { Error } from "mailgun-js";
import { ApiResponseObject } from "../../../utils/response";
import dotenv from "dotenv";
import { EmailTypes } from "../../../utils/email.types";
import { sendEmailType } from "../../../utils/check.email.types";

dotenv.config();

const DOMAIN = "sandboxf48da9609f68469298129cf7077968cd.mailgun.org";
const mg = mailgun({ apiKey: `${process.env.MAILGUN_KEY}`, domain: DOMAIN });
const apiResponse: ApiResponseObject = new ApiResponseObject({});

export const sendEmail = (
  email: string,
  token: string,
  res: any,
  emailType: EmailTypes
) => {
  mg.messages().send(
    sendEmailType({ emailType: emailType, email: email, token: token }),
    function (error: any, body: any) {
      console.log(body);
      if (error) {
        console.log("Can not send email to this address" + email);
        console.log(
          sendEmailType({ emailType: emailType, email: email, token: token })
        );
        apiResponse.success = false;
        apiResponse.message =
          "Something went wrong sending an email to this address";
        apiResponse.source = { error: error.message };
        return res.status(500).json(apiResponse.returner());
      } else {
        console.log(
          sendEmailType({ emailType: emailType, email: email, token: token })
        );

        apiResponse.success = true;
        apiResponse.message = "verification email sent";
        return res.status(200).json(apiResponse.returner());
      }
    }
  );
};

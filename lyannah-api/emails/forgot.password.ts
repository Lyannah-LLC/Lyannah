export const forgotPasswordHtml = (token: string) => {
  return `Hello, This is an email for you to verify that this email address belongs to you. 
  <a href="http://0.0.0.0:3030/validate?${token}">Click
   here to reset your password</a>
   <br />

   If this wasn't sent by you, please ignore
   `;
};

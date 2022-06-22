export const emailPayload = ({ from, to, subject, html }: any): any => {
  return {
    from: from,
    to: to,
    subject: subject,
    html: html,
  };
};

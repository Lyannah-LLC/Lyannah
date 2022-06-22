import jwt from "jsonwebtoken";

export const decodeTokenObject = (token: string) => {
  const decodedToken = jwt.decode(token, {
    complete: true,
  });
  // Stringify the token so that you can cast the type as string and convert back to a JSON object to access needed data
  const tokenObject = JSON.parse(JSON.stringify(decodedToken));

  return tokenObject;
};

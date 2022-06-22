import http from "http";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT;

//Do something when this server is hit.
server.listen(port || 4000, () => {
  console.log(`The server has started on  ${port || 4000}`);
});

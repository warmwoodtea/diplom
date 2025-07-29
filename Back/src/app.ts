import express, { type Request, type Response } from "express";
import cosrs from "cors";

const app = express();

app.use(cosrs());

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

const APP_PORT = 3002;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});

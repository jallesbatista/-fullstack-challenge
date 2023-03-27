import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { clientRouter, contactRouter, sessionRouter } from "./routes";
import handleError from "./errors/handleError";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/login", sessionRouter);
app.use("/client", clientRouter);
app.use("/contact", contactRouter);

app.use(handleError);
export default app;

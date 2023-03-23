import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { clientRouter, contactRouter, sessionRouter } from "./routes";
import handleError from "./errors/handleError";

const app = express();
app.use(express.json());
app.use("/login", sessionRouter);
app.use("/client", clientRouter);
app.use("/contact", contactRouter);

app.use(handleError);
export default app;

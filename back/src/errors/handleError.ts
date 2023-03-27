import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "./AppError";

const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof ZodError) {
    return res.status(400).json(error.flatten().fieldErrors);
  }

  console.log(error);
  return res.status(500).json({ message: "Internal Server Error" });
};

export default handleError;

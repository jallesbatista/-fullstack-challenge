import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureValidateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }
  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new AppError(err.message, 401);
    }

    req.user = {
      id: String(decoded.sub),
    };

    return next();
  });
};

export default ensureValidateTokenMiddleware;

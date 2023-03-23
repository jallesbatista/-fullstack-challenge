import { NextFunction, Request, Response } from "express";
import { validate } from "uuid";
import { AppError } from "../errors/AppError";

const ensureValidateUuidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const validUuid = validate(id);

  if (!validUuid) {
    throw new AppError("Invalid uuid", 400);
  }

  return next();
};

export default ensureValidateUuidMiddleware;

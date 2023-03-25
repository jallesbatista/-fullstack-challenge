import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

const ensureIsClientOwnerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (id != req.user.id) {
    throw new AppError("You do not have permission to perform this action", 403);
  }

  return next();
};

export default ensureIsClientOwnerMiddleware;

import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";

const ensureClientAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clientAlreadyExists = await clientRepo
    .createQueryBuilder("client")
    .where("client.email = :email OR client.tel = :tel", {
      email: req.body.email,
      tel: req.body.tel,
    })
    .getOne();

  if (clientAlreadyExists && clientAlreadyExists.id !== req.user?.id) {
    throw new AppError("A client with this email/tel already exists", 409);
  }

  return next();
};

export default ensureClientAlreadyExistsMiddleware;

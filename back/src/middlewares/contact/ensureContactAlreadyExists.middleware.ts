import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const ensureContactAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contact);

  const contactAlreadyExists = await contactRepo
    .createQueryBuilder("contact")
    .where("contact.clientId = :id AND (contact.email = :email AND contact.tel = :tel)", {
      id: req.user.id,
      email: req.body.email,
      tel: req.body.tel,
    })
    .getOne();

  if (contactAlreadyExists && contactAlreadyExists.id !== req.params.id) {
    throw new AppError("A contact with this tel number and email has already added", 409);
  }

  const clientHaveThisData = await clientRepo
    .createQueryBuilder("client")
    .where("client.id = :id", { id: req.user.id })
    .andWhere("client.email = :email OR client.tel = :tel", {
      email: req.body.email,
      tel: req.body.tel,
    })
    .getOne();

  if (clientHaveThisData) {
    throw new AppError("This email and/or tel number are yours", 409);
  }

  return next();
};

export default ensureContactAlreadyExistsMiddleware;

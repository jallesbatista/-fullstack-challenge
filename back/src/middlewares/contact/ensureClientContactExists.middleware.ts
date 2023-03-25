import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const ensureClientContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const contactRepo = AppDataSource.getRepository(Contact);

  const contactExists = await contactRepo.findOneBy({
    id: id,
    client: {
      id: req.user.id,
    },
  });
  if (!contactExists) {
    throw new AppError("Not found", 404);
  }
  return next();
};

export default ensureClientContactExistsMiddleware;

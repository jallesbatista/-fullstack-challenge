import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/AppError";

const ensureClientExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({
    id: id,
  });

  if (!client) {
    throw new AppError("Not found", 404);
  }

  return next();
};

export default ensureClientExistsMiddleware;

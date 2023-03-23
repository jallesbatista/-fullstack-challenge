import { Request, Response } from "express";
import { createSessionService } from "../services/session";

export const createSessionController = async (req: Request, res: Response): Promise<Response> => {
  const sessionData = req.body; //typar

  const token = await createSessionService(sessionData);

  return res.status(200).json(token);
};

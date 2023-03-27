import { Request, Response } from "express";
import { TContactRequest, TContactResponse } from "../interfaces/contact.interfaces";
import {
  createContactService,
  deleteContactService,
  listContactService,
  retrieveContactService,
  updateContactService,
} from "../services/contact";

export const createContactController = async (req: Request, res: Response) => {
  const payload: TContactRequest = req.body;
  const { id } = req.user;
  const data: TContactResponse = await createContactService(payload, id);
  return res.status(201).json(data);
};

export const retrieveContactController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await retrieveContactService(id);

  return res.status(200).json(data);
};

export const listContactController = async (req: Request, res: Response) => {
  const data = await listContactService(req.query, req.user.id);

  return res.status(200).json(data);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteContactService(id);

  return res.status(204).json(null);
};

export const updateContactController = async (req: Request, res: Response) => {
  const payload: TContactRequest = req.body;
  const { id } = req.params;

  const data = await updateContactService(payload, id);

  return res.status(200).json(data);
};

import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
  TClientUpdateRequest,
} from "../interfaces/client.interfaces";
import {
  createClientService,
  deleteClientService,
  retrieveClientService,
  updateClientService,
} from "../services/client";

export const createClientController = async (req: Request, res: Response) => {
  const payload: TClientRequest = req.body;

  const data: TClientResponse = await createClientService(payload);
  return res.status(201).json(data);
};

export const retrieveClientController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const data: TClientResponse = await retrieveClientService(id);

  return res.status(200).json(data);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteClientService(id);

  return res.status(204).json(null);
};

export const updateClientController = async (req: Request, res: Response) => {
  const payload: TClientUpdateRequest = req.body;
  const { id } = req.params;

  const data = await updateClientService(payload, id);

  return res.status(200).json(data);
};

import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";
import { ensureValidateBodyMiddleware } from "../middlewares";
import { sessionRequestSerializer } from "../serializers/session.serializer";

export const sessionRouter = Router();

sessionRouter.post(
  "",
  ensureValidateBodyMiddleware(sessionRequestSerializer),
  createSessionController
);

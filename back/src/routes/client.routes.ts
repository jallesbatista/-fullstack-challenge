import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  retrieveClientController,
  updateClientController,
} from "../controllers/client.controller";
import {
  ensureClientExistsMiddleware,
  ensureIsClientOwnerMiddleware,
  ensureValidateBodyMiddleware,
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
} from "../middlewares";
import { clientRequestSerializer, clientUpdateSerializer } from "../serializers/client.serializer";

const clientRouter = Router();
clientRouter.post(
  "",
  ensureValidateBodyMiddleware(clientRequestSerializer),
  createClientController
);
clientRouter.patch(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureIsClientOwnerMiddleware,
  ensureClientExistsMiddleware,
  ensureValidateBodyMiddleware(clientUpdateSerializer),
  updateClientController
);
clientRouter.get("", ensureValidateTokenMiddleware, retrieveClientController);
clientRouter.delete(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureIsClientOwnerMiddleware,
  ensureClientExistsMiddleware,
  deleteClientController
);

export default clientRouter;

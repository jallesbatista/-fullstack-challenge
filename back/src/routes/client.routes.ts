import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  retrieveClientController,
  updateClientController,
} from "../controllers/client.controller";
import {
  ensureValidateBodyMiddleware,
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
} from "../middlewares";
import {
  ensureClientAlreadyExistsMiddleware,
  ensureClientExistsMiddleware,
  ensureIsClientOwnerMiddleware,
} from "../middlewares/client";
import { clientRequestSerializer, clientUpdateSerializer } from "../serializers/client.serializer";

const clientRouter = Router();
clientRouter.post(
  "",
  ensureValidateBodyMiddleware(clientRequestSerializer),
  ensureClientAlreadyExistsMiddleware,
  createClientController
);
clientRouter.patch(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureIsClientOwnerMiddleware,
  ensureClientExistsMiddleware,
  ensureValidateBodyMiddleware(clientUpdateSerializer),
  ensureClientAlreadyExistsMiddleware,
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

import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contact.controller";
import {
  ensureValidateBodyMiddleware,
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
} from "../middlewares";
import {
  ensureContactAlreadyExistsMiddleware,
  ensureClientContactExistsMiddleware,
} from "../middlewares/contact";
import {
  contactRequestSerializer,
  contactUpdateSerializer,
} from "../serializers/contact.serializer";

const contactRouter = Router();
contactRouter.post(
  "",
  ensureValidateTokenMiddleware,
  ensureValidateBodyMiddleware(contactRequestSerializer),
  ensureContactAlreadyExistsMiddleware,
  createContactController
);

contactRouter.get(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureClientContactExistsMiddleware,
  retrieveContactController
);

contactRouter.get("", ensureValidateTokenMiddleware, listContactController);

contactRouter.patch(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureValidateBodyMiddleware(contactUpdateSerializer),
  ensureClientContactExistsMiddleware,
  ensureContactAlreadyExistsMiddleware,
  updateContactController
);

contactRouter.delete(
  "/:id",
  ensureValidateTokenMiddleware,
  ensureValidateUuidMiddleware,
  ensureClientContactExistsMiddleware,
  deleteContactController
);
export default contactRouter;

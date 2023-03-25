import { number, z } from "zod";
import {
  contactRequestSerializer,
  contactResponseSerializer,
} from "../serializers/contact.serializer";

export type TContactRequest = z.infer<typeof contactRequestSerializer>;
export type TContactResponse = z.infer<typeof contactResponseSerializer>;

import { z } from "zod";
import { contactResponseSerializer } from "./contact.serializer";

export const clientResponseSerializer = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  tel: z.string(),
  createdAt: z.date(),
});

export const clientReponseWithContacts = clientResponseSerializer.extend({
  contacts: z.array(contactResponseSerializer),
});

export const clientRequestSerializer = clientResponseSerializer
  .omit({
    id: true,
    createdAt: true,
    tel: true,
    contacts: true,
  })
  .extend({
    password: z.string().min(4),
    tel: z.string().min(13).max(13).regex(new RegExp("\\d{13}"), "Only tel numbers"),
  });

export const clientUpdateSerializer = clientRequestSerializer.partial();

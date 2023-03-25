import { z } from "zod";

export const contactResponseSerializer = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  tel: z.string(),
  createdAt: z.date(),
});

export const contactRequestSerializer = contactResponseSerializer
  .omit({
    id: true,
    createdAt: true,
    tel: true,
  })
  .extend({
    tel: z.string().min(13).max(13).regex(new RegExp("\\d{13}"), "Only tel numbers"),
  });

export const contactUpdateSerializer = contactRequestSerializer.partial();

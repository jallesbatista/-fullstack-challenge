import { z } from "zod";

export const contactResponseSerializer = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  tel: z.string(),
  createdAt: z.date(),
});

export const contactRequestSerializer = contactResponseSerializer.omit({
  id: true,
  createdAt: true,
});

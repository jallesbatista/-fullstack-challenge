import { z } from "zod";

export const sessionRequestSerializer = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string(),
});

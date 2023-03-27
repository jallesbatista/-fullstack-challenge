import { z } from "zod";
import { sessionRequestSerializer } from "../serializers/session.serializer";

export type TSessionRequest = z.infer<typeof sessionRequestSerializer>;

import { z } from "zod";
import {
  clientRequestSerializer,
  clientResponseSerializer,
  clientUpdateSerializer,
} from "../serializers/client.serializer";

// FAZER INTERFACES
export type TClientRequest = z.infer<typeof clientRequestSerializer>;
export type TClientResponse = z.infer<typeof clientResponseSerializer>;
export type TClientUpdateRequest = z.infer<typeof clientUpdateSerializer>;

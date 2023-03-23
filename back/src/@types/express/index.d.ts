import { iUserData } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}

export {};

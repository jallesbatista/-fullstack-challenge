import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureValidateBodyMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default ensureValidateBodyMiddleware;

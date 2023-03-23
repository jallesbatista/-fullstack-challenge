import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import "dotenv/config";
import bcrypt from "bcryptjs";
import { AppError } from "../../errors/AppError";
import { Client } from "../../entities/client.entity";

const createSessionService = async ({
  email,
  password,
}: any): Promise<{
  token: string;
}> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clientExists = await clientRepository.findOneBy({
    email: email,
  });

  if (!clientExists) {
    throw new AppError("Invalid credentials", 403);
  }

  const validatePassword = await bcrypt.compare(
    password,
    clientExists.password
  );

  if (!validatePassword) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: clientExists.id,
    expiresIn: "24h",
  });
  return { token: token };
};

export default createSessionService;

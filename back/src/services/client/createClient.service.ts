import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { TClientRequest, TClientResponse } from "../../interfaces/client.interfaces";
import { clientResponseSerializer } from "../../serializers/client.serializer";

const createClientService = async (payload: TClientRequest): Promise<TClientResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clientAlreadyExists = await clientRepo
    .createQueryBuilder("client")
    .where("client.email = :email OR client.tel = :tel", {
      email: payload.email,
      tel: payload.tel,
    })
    .getOne();

  if (clientAlreadyExists) {
    throw new AppError("A client with this email/tel already exists", 409);
  }

  const client = clientRepo.create(payload);
  await clientRepo.save(client);

  return clientResponseSerializer.parse(client);
};

export default createClientService;

import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { TClientRequest, TClientResponse } from "../../interfaces/client.interfaces";
import { clientResponseSerializer } from "../../serializers/client.serializer";

const createClientService = async (payload: TClientRequest): Promise<TClientResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = clientRepo.create(payload);
  await clientRepo.save(client);

  return clientResponseSerializer.parse(client);
};

export default createClientService;

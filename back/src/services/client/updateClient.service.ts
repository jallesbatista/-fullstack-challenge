import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { TClientResponse, TClientUpdateRequest } from "../../interfaces/client.interfaces";
import { clientResponseSerializer } from "../../serializers/client.serializer";

const updateClientService = async (
  payload: TClientUpdateRequest,
  id: string
): Promise<TClientResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const oldClientData = await clientRepo.findOneBy({
    id: id,
  });

  const client = clientRepo.create({
    ...oldClientData,
    ...payload,
  });
  await clientRepo.save(client);

  return clientResponseSerializer.parse(client);
};

export default updateClientService;

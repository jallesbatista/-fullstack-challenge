import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { TClientResponse } from "../../interfaces/client.interfaces";
import { clientResponseSerializer } from "../../serializers/client.serializer";

const retrieveClientService = async (id: string): Promise<TClientResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOne({
    where: {
      id: id,
    },
  });

  return clientResponseSerializer.parse(client);
};

export default retrieveClientService;

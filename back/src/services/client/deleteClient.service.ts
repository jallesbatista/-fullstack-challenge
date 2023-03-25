import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({
    id: id,
  });

  await clientRepo.remove(client);
};

export default deleteClientService;

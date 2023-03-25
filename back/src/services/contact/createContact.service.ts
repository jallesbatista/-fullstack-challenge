import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interfaces";
import { contactResponseSerializer } from "../../serializers/contact.serializer";

const createContactService = async (
  payload: TContactRequest,
  clientId: string
): Promise<TContactResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({
    id: clientId,
  });

  const contact = contactRepo.create({
    ...payload,
    client: client,
  });
  await contactRepo.save(contact);

  return contactResponseSerializer.parse(contact);
};

export default createContactService;

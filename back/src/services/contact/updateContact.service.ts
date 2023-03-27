import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactRequest } from "../../interfaces/contact.interfaces";

const updateContactService = async (payload: TContactRequest, id: string): Promise<Contact> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepo.findOneBy({
    id: id,
  });

  const contact = contactRepo.create({
    ...oldContactData,
    ...payload,
  });
  await contactRepo.save(contact);

  return contact;
};

export default updateContactService;

import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const retrieveContactService = async (id: string): Promise<Contact> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOne({
    where: {
      id: id,
    },
  });

  return contact;
};

export default retrieveContactService;

import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOneBy({
    id: id,
  });

  await contactRepo.remove(contact);
};

export default deleteContactService;

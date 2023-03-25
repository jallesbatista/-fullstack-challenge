import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const listContactService = async (querys: any, clientId: string): Promise<Contact[]> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const countContacts = await contactRepo.count({
    where: {
      client: {
        id: clientId,
      },
    },
  });
  let { page, perPage } = querys;

  page = Number(page);
  perPage = Number(perPage);

  if (!perPage || isNaN(perPage)) {
    perPage = 10;
  }

  if (!page || isNaN(page)) {
    page = 1;
  }

  const prevPage: string | null =
    page == 1 ? null : `http://localhost:3000/contact?page=${page - 1}&perPage=${perPage}`;

  const nextPage: string | null =
    countContacts <= perPage * page
      ? null
      : `http://localhost:3000/contact?page=${page + 1}&perPage=${perPage}`;

  if (page > Math.ceil(countContacts / perPage) && page > 1) {
    throw new AppError("Invalid page", 400);
  }

  const contacts = await contactRepo.find({
    order: {
      name: "ASC",
    },
    where: {
      client: {
        id: clientId,
      },
    },
  });

  const pag = {
    prevPage: prevPage,
    nextPage: nextPage,
    count: countContacts,
    data: contacts,
  }; // Paginação que pode ser utilizada futuramente.

  return contacts;
};

export default listContactService;

import { UserContext } from "@/contexts/userContext";
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  List,
  ListItem,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import ContactCard from "./contactCard";
import { MdPersonAdd } from "react-icons/md";
import ContactForm from "./contactForm";
import ConfirmDelete from "./confirmDelete";
import { BsFileEarmarkPdf } from "react-icons/bs";
import clientReportPDF from "../functions/clientReportPDF";
import NoContactsMessage from "./noContactsMessage";

const ContactsList = () => {
  const { contactList, setContact, user } = useContext(UserContext);
  const {
    isOpen: isContactFormOpen,
    onClose: onContactFormClose,
    onOpen: onContactFormOpen,
  } = useDisclosure();

  const {
    isOpen: isConfirmDeleteOpen,
    onClose: onConfirmDeleteClose,
    onOpen: onConfirmDeleteOpen,
  } = useDisclosure();

  const [toEdit, setToEdit] = useState<boolean>(false);

  const openAddContact = () => {
    onContactFormOpen();
    setContact(null);
  };

  return (
    <>
      <Box m={"0 auto"} w={"90%"} minW={300} mt={"106px"}>
        <Flex direction={"column"} gap={4}>
          <ButtonGroup>
            <IconButton
              variant={"ghost"}
              color={useColorModeValue("green.800", "green.300")}
              bg={useColorModeValue("green.200", "green.200")}
              icon={<MdPersonAdd />}
              border={"2px solid transparent"}
              aria-label="Add contact"
              _hover={{
                transform: "scale(1.07)",
                border: "2px solid #22543d",
              }}
              onClick={openAddContact}
              ml={2}
              px={6}
              size={"md"}
              fontSize={"1.8rem"}
            />

            <IconButton
              aria-label="Generate PDF"
              icon={<BsFileEarmarkPdf />}
              bg={useColorModeValue("red.700", "red.700")}
              color="white"
              px={6}
              size={"md"}
              fontSize={"1.8rem"}
              _hover={{
                transform: "scale(1.07)",
              }}
              onClick={() => clientReportPDF(user!, contactList)}
            />
          </ButtonGroup>

          <NoContactsMessage openAddContact={openAddContact} />
          <List
            zIndex={1}
            spacing={4}
            minH={500}
            maxH={500}
            overflowY={"scroll"}
            p={"10px 10px 20px 10px"}
            sx={{
              "::-webkit-scrollbar": {
                width: "6px",
              },
              "::-webkit-scrollbar-track": {
                width: "6px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "blue.200",
                borderRadius: "24px",
              },
              "@media (min-width: 768px)": {
                maxHeight: "600px",
              },
            }}
          >
            {contactList.map((el) => (
              <ListItem key={el.id}>
                <ContactCard
                  contact={el}
                  onContactFormOpen={onContactFormOpen}
                  setToEdit={setToEdit}
                  onConfirmDeleteOpen={onConfirmDeleteOpen}
                />
              </ListItem>
            ))}
          </List>
        </Flex>
      </Box>
      <ConfirmDelete isOpen={isConfirmDeleteOpen} onClose={onConfirmDeleteClose} toDelete={true} />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={onContactFormClose}
        toEdit={toEdit}
        setToEdit={setToEdit}
      />
    </>
  );
};

export default ContactsList;

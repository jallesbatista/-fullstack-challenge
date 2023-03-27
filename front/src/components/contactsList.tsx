import { UserContext } from "@/contexts/userContext";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Stack,
  TagLeftIcon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import ContactCard from "./contactCard";
import { MdPersonAdd } from "react-icons/md";
import ContactForm from "./contactForm";
import { TContactRegister } from "@/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/schemas";

const ContactsList = () => {
  const { contactList } = useContext(UserContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { userEdit, user } = useContext(UserContext);

  return (
    <>
      <Box maxW={1200} m={"0 auto"} w={"90%"} minW={300}>
        <Flex direction={"column"} gap={4}>
          <IconButton
            variant={"ghost"}
            color={useColorModeValue("green.800", "green.300")}
            bg={useColorModeValue("green.200", "green.200")}
            icon={<MdPersonAdd />}
            border={"2px solid transparent"}
            aria-label="Add contact"
            _hover={{
              transform: "scale(1.1)",
              border: "2px solid #22543d",
            }}
            alignSelf={"flex-end"}
            onClick={onOpen}
            marginRight={4}
            size={"lg"}
          />

          <List
            spacing={4}
            minH={500}
            maxH={500}
            overflowY={"scroll"}
            p={"4px 10px 50px 10px"}
            sx={{
              "&&::-webkit-scrollbar": {
                width: "4px",
              },
              "::-webkit-scrollbar-track": {
                width: "6px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "blue.100",
                borderRadius: "24px",
              },
            }}
          >
            {contactList.map((contact) => (
              <ListItem key={contact.id}>
                <ContactCard contact={contact} />
              </ListItem>
            ))}
          </List>
        </Flex>
      </Box>

      <ContactForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactsList;

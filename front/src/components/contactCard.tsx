import { UserContext } from "@/contexts/userContext";
import { IUserData } from "@/types";
import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { AiTwotoneEdit } from "react-icons/ai";

interface IContactCardProps {
  contact: IUserData;
  onContactFormOpen: () => void;
  setToEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmDeleteOpen: () => void;
}

const ContactCard = ({
  contact,
  onContactFormOpen,
  onConfirmDeleteOpen,
  setToEdit,
}: IContactCardProps) => {
  const { setContact } = useContext(UserContext);
  return (
    <>
      <Card
        p={2}
        rounded={"lg"}
        variant={"elevated"}
        transition={"0.5s"}
        _hover={{
          boxShadow: "lg",
        }}
        bg={useColorModeValue("white", "gray.600")}
      >
        <CardBody bg={useColorModeValue("gray.400", "gray.600")} px={["8px", "8px"]}>
          <Flex alignItems="center" justifyContent={"space-between"}>
            <Flex gap={2} alignItems="center">
              <Avatar />
              <Heading
                as={"h3"}
                fontSize={"1rem"}
                color={useColorModeValue("black", "white")}
                wordBreak={"break-all"}
                noOfLines={1}
              >
                {contact.name}
              </Heading>
            </Flex>
            <Menu>
              <MenuButton as={IconButton} aria-label="Options" icon={<SlOptionsVertical />} />

              <MenuList p={"2px"}>
                <MenuItem
                  fontWeight={600}
                  color={useColorModeValue("blue.500", "white")}
                  icon={<AiTwotoneEdit />}
                  onClick={() => {
                    setToEdit(true);
                    setContact(contact);
                    onContactFormOpen();
                  }}
                >
                  Editar
                </MenuItem>

                <MenuItem
                  fontWeight={600}
                  color={useColorModeValue("red.700", "red.500")}
                  icon={<FaRegTrashAlt />}
                  onClick={() => {
                    setContact(contact);
                    onConfirmDeleteOpen();
                  }}
                >
                  Remover
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default ContactCard;

import { IUserData } from "@/types";
import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
interface IContactCardProps {
  contact: IUserData;
}

const ContactCard = ({ contact }: IContactCardProps) => {
  return (
    <Card
      p={2}
      rounded={"lg"}
      boxShadow={"2xl"}
      transition={"0.5s"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "dark-lg",
      }}
      cursor={"pointer"}
      bg={useColorModeValue("white", "gray.600")}
    >
      <CardBody bg={useColorModeValue("gray.400", "gray.600")}>
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Flex gap={4} alignItems="center">
            <Avatar />
            <Heading
              as={"h3"}
              fontSize={"1rem"}
              color={useColorModeValue("black", "white")}
              wordBreak={"break-all"}
            >
              {contact.name.split(" ")[0]}
            </Heading>
          </Flex>
          <IconButton
            variant={"ghost"}
            colorScheme="red"
            bg={useColorModeValue("white", "white")}
            icon={<FaRegTrashAlt />}
            aria-label="Delete contact"
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ContactCard;

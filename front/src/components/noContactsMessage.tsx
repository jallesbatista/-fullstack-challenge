import { UserContext } from "@/contexts/userContext";
import { Box, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { MdPersonAdd } from "react-icons/md";

interface NoContactsMessageProps {
  openAddContact: () => void;
}
const NoContactsMessage = ({ openAddContact }: NoContactsMessageProps) => {
  const { contactList } = useContext(UserContext);

  if (!contactList.length) {
    return (
      <>
        <Flex
          bg={"green.50"}
          rounded={"lg"}
          border={"2px"}
          borderColor={"gray.400"}
          borderStyle={"dashed"}
          minH={"120px"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"lg"}
          transition="0.5s"
          cursor={"pointer"}
          _hover={{
            boxShadow: "xl",
            transform: "scale(1.01)",
          }}
          onClick={openAddContact}
          flexDirection={"column"}
          p={6}
          color={"darkolivegreen"}
          fontWeight={600}
        >
          <Text as="p">Nenhum contato encontrado :(</Text>
          <Text as="p" align={"center"}>
            Clique aqui ou no <Icon color={"green.800"} fontSize={"1.5rem"} as={MdPersonAdd} /> para
            adicionar um contato.
          </Text>
        </Flex>
      </>
    );
  }
  return null;
};

export default NoContactsMessage;

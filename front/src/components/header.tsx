import { UserContext } from "@/contexts/userContext";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCog, FaUserSlash } from "react-icons/fa";
import ConfirmDelete from "./confirmDelete";
import ProfileCard from "./profileCard";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const logOut = () => {
    destroyCookie(null, "kenzie.token");
    setUser(null);
    router.push("/login");
  };

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: toDelete, onClose: closeDelete, onOpen: openDelete } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("blue.700", "blue.100")}
        padding={5}
        boxShadow="dark-lg"
        mb={10}
      >
        <Flex justify={"space-between"} align={"center"}>
          <Heading fontSize={"1.5rem"} color="white">
            Kenzie
          </Heading>
          <Menu>
            <MenuButton as={Button} alignContent={"center"}>
              <Flex align={"center"} gap={4}>
                {user ? user?.name.split(" ")[0] : "User"}
                <Avatar size={"sm"} />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={<FaUserCog />}
                _hover={{
                  bg: "gray.300",
                }}
                transition={"0.3s"}
                _active={{
                  transform: "scale(0.9)",
                }}
                onClick={onOpen}
              >
                Perfil
              </MenuItem>
              <MenuItem
                icon={<FaUserSlash />}
                _hover={{
                  bg: "gray.300",
                }}
                transition={"0.3s"}
                _active={{
                  transform: "scale(0.9)",
                }}
                onClick={openDelete}
              >
                Deletar conta
              </MenuItem>
              <MenuItem
                icon={<BiLogOut />}
                _hover={{
                  bg: "red.400",
                }}
                color="white"
                fontWeight={800}
                bg={useColorModeValue("red.700", "red.500")}
                transition={"0.3s"}
                _active={{
                  transform: "scale(0.9)",
                }}
                onClick={() => logOut()}
              >
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <ProfileCard isOpen={isOpen} onClose={onClose} />
      <ConfirmDelete isOpen={toDelete} onClose={closeDelete} />
    </>
  );
};

export default Header;

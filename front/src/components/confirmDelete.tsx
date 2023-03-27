import { UserContext } from "@/contexts/userContext";
import { IModalProps } from "@/types";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";

const ConfirmDelete = ({ isOpen, onClose }: IModalProps) => {
  const { userDelete } = useContext(UserContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent alignItems={"end"} width={"90%"}>
        <Box
          as="form"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={() => userDelete()}
        >
          <Heading fontSize={"2rem"} textAlign={"center"} mb={4}>
            Deletar conta
          </Heading>
          <Stack spacing={4} minW={"200px"}>
            <Text>
              A deleção da conta é irreversível,{" "}
              <Text color={"red.600"} fontWeight={800} as={"span"}>
                todos os seus dados serão perdidos
              </Text>
              . Deseja prosseguir?
            </Text>

            <ButtonGroup justifyContent={"center"}>
              <Button
                loadingText="Submitting"
                size="lg"
                type="submit"
                variant={"sucess"}
                _hover={{
                  bg: "#63b16b",
                }}
                _active={{
                  transform: "scale(0.9)",
                }}
              >
                Confirmar
              </Button>
              <Button
                loadingText="Cancelling"
                size="lg"
                type="button"
                variant={"error"}
                _hover={{
                  bg: "#e15475",
                }}
                _active={{
                  transform: "scale(0.9)",
                }}
                onClick={onClose}
              >
                Cancelar
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDelete;

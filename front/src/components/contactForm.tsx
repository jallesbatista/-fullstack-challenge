import { UserContext } from "@/contexts/userContext";
import { contactSchema } from "@/schemas";
import { TContactRegister } from "@/types";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { FaWindowClose } from "react-icons/fa";

interface IContactFormProps {
  toEdit?: boolean;
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  setToEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm = ({ toEdit, onClose, isOpen, children, setToEdit }: IContactFormProps) => {
  const { contact, contactRegister, contactEdit, setContact } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactRegister>({
    resolver: yupResolver(contactSchema),
  });

  useEffect(() => {
    if (toEdit) {
      reset({
        name: contact?.name,
        email: contact?.email,
        tel: contact?.tel,
      });
    } else {
      reset({
        name: "",
        email: "",
        tel: "",
      });
    }
  }, [toEdit]);

  const closeContactForm = () => {
    setContact(null);
    onClose();
    setToEdit(false);
    reset({
      name: "",
      email: "",
      tel: "",
    });
  };

  const onSubmit = async (data: TContactRegister) => {
    if (!toEdit) {
      const sucess = await contactRegister(data);
      if (sucess) {
        closeContactForm();
      }
    } else {
      await contactEdit(data);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeContactForm} isCentered>
      <ModalOverlay onClick={closeContactForm} />
      <ModalContent w={"90%"}>
        <Box
          as={"form"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={handleSubmit(onSubmit)}
          position={"relative"}
        >
          <IconButton
            fontSize={"1.5rem"}
            aria-label="Close"
            icon={<FaWindowClose />}
            position={"absolute"}
            top={"24px"}
            right={"10px"}
            p={0}
            height={0}
            minH={0}
            transition={"0.3s"}
            color="red"
            _active={{
              transform: "scale(0.9)",
            }}
            onClick={closeContactForm}
          />
          <Heading fontSize={"1.5rem"} textAlign={"center"}>
            {toEdit ? "Editar contato" : "Adicionar contato"}
          </Heading>

          <Stack spacing={4} minW={"200px"}>
            <FormControl id="name" isInvalid={!!errors.name?.message}>
              <FormLabel>Nome</FormLabel>
              <Input
                focusBorderColor="blue.300"
                type="text"
                {...register("name")}
                placeholder="Insira seu nome"
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email?.message}>
              <FormLabel>E-mail</FormLabel>
              <Input
                focusBorderColor="blue.300"
                type="email"
                {...register("email")}
                placeholder="Insira seu email, ex: carlos@mail.com"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="tel" isInvalid={!!errors.tel?.message}>
              <FormLabel>Contato (Celular)</FormLabel>
              <Input
                as={ReactInputMask}
                maskChar={null}
                mask="+99 (99) 99999-9999"
                focusBorderColor="blue.300"
                type="tel"
                placeholder="Insira seu número de telefone"
                {...register("tel")}
              />
              <FormErrorMessage>{errors.tel?.message}</FormErrorMessage>
            </FormControl>
            {toEdit ? (
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
                  Salvar
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
                  onClick={() => {
                    setContact(null);
                    onClose();
                    setToEdit(false);
                  }}
                >
                  Voltar
                </Button>
              </ButtonGroup>
            ) : (
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  variant={"default"}
                  _hover={{
                    bg: "blue.700",
                  }}
                  _active={{
                    transform: "scale(0.95)",
                  }}
                >
                  Criar
                </Button>
              </Stack>
            )}
            {children}
          </Stack>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ContactForm;

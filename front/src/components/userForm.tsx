import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  FormErrorMessage,
  ButtonGroup,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import { ReactNode, useState } from "react";
import { IUserRegister } from "@/types";

export interface IUserFormProps {
  register: UseFormRegister<IUserRegister>;
  errors: FieldErrors<IUserRegister>;
  toEdit?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

const UserForm = ({ register, errors, toEdit, onClose, children }: IUserFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
      {toEdit && (
        <Heading fontSize={"2rem"} textAlign={"center"}>
          Perfil
        </Heading>
      )}
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
            as={InputMask}
            maskChar={null}
            mask="+99 (99) 99999-9999"
            focusBorderColor="blue.300"
            type="tel"
            placeholder="Insira seu número de telefone"
            {...register("tel")}
          />
          <FormErrorMessage>{errors.tel?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" isInvalid={!!errors.password?.message}>
          <FormLabel>{toEdit ? "Nova senha" : "Senha"}</FormLabel>
          <InputGroup>
            <Input
              focusBorderColor="blue.300"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder={toEdit ? "Insira sua nova senha" : "Insira sua senha"}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="confirmPassword" isInvalid={!!errors.confirmPassword?.message}>
          <FormLabel>{toEdit ? "Confirmar nova senha" : "Confirmar senha"}</FormLabel>
          <InputGroup>
            <Input
              focusBorderColor="blue.300"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder={
                toEdit ? "Insira sua nova senha novamente" : "Insira sua senha novamente"
              }
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
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
              onClick={onClose}
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
                transform: "scale(0.9)",
              }}
            >
              Cadastrar
            </Button>
          </Stack>
        )}
        {children}
      </Stack>
    </Box>
  );
};

export default UserForm;

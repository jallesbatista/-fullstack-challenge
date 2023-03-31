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
  Link,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IUserLogin } from "@/types";
import { loginSchema } from "@/schemas";
import NextLink from "next/link";
import { AuthContext } from "@/contexts/authContext";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onFormSubmit = (formData: IUserLogin) => {
    login(formData);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      as="form"
      bg={useColorModeValue("gray.50", "gray.800")}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} pl={-100}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4} minW={"200px"}>
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
            <FormControl id="password" isInvalid={!!errors.password?.message}>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
                  focusBorderColor="blue.300"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Insira sua senha"
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
                Entrar
              </Button>
            </Stack>
            <Link textAlign={"center"} as={NextLink} href="/register">
              Ainda não é cadastrado?{" "}
              <Text fontWeight={800} as={"span"}>
                Cadastre-se aqui
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;

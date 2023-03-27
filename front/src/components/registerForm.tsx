import { AuthContext } from "@/contexts/authContext";
import { userRegisterSchema } from "@/schemas";
import { IUserRegister } from "@/types";
import { Flex, Heading, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import UserForm from "./userForm";
import NextLink from "next/link";

const RegisterForm = () => {
  const { userRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(userRegisterSchema),
  });

  const onSubmit = (data: IUserRegister) => {
    userRegister(data);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      as="form"
      bg={useColorModeValue("gray.50", "gray.800")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={8} mx={"auto"} w={"100%"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register
          </Heading>
        </Stack>

        <UserForm errors={errors} register={register}>
          <Link textAlign={"center"} as={NextLink} href="/login">
            Ja é cadastrado?{" "}
            <Text fontWeight={800} as={"span"}>
              Faça login aqui
            </Text>
          </Link>
        </UserForm>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;

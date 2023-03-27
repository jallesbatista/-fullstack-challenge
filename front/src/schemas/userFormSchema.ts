import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Deve ser um e-mail válido").required("E-mail obrigatório"),
  password: yup.string().min(4, "Deve ter no mínimo 4 caracteres").required("Senha obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas não coincidem"),
  tel: yup
    .string()
    .transform((value: string) => value.replace(/\D/g, ""))
    .required("Contato obrigatório")
    .min(13, "O formato é +00 (00) 00000-0000"),
});

export const userEditSchema = userRegisterSchema.shape({
  password: yup.string(),
});

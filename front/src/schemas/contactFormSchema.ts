import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Deve ser um e-mail válido").required("E-mail obrigatório"),
  tel: yup
    .string()
    .transform((value: string) => value.replace(/\D/g, ""))
    .required("Contato obrigatório")
    .min(13, "O formato é +00 (00) 00000-0000"),
});

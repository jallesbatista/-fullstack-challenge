import { UserContext } from "@/contexts/userContext";
import { userEditSchema } from "@/schemas";
import { IModalProps, IUserEdit, IUserRegister } from "@/types";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserForm from "./userForm";

const ProfileCard = ({ isOpen, onClose }: IModalProps) => {
  const { userEdit, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(userEditSchema),
  });

  const onSubmit = (data: IUserEdit) => {
    if (!data.password?.trim().length) {
      delete data.password;
    }
    userEdit(data);
  };

  useEffect(() => {
    reset({
      name: user?.name,
      email: user?.email,
      tel: user?.tel,
      password: "",
      confirmPassword: "",
    });
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)} width={"90%"}>
        <UserForm register={register} errors={errors} toEdit={true} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default ProfileCard;

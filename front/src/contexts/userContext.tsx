import { createContext, useState } from "react";
import { IProviderProps, IUserData, IUserEdit, TContactRegister } from "@/types";
import api from "@/services/api";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

interface UserProviderData {
  user: IUserData | null;
  setUser: React.Dispatch<React.SetStateAction<IUserData | null>>;
  userEdit: (data: IUserEdit) => Promise<void>;
  userDelete: () => Promise<void>;
  contactList: IUserData[];
  setContactList: React.Dispatch<React.SetStateAction<IUserData[]>>;
  contactRegister: (data: TContactRegister) => Promise<boolean>;
  contact: IUserData | null;
  setContact: React.Dispatch<React.SetStateAction<IUserData | null>>;
  contactEdit: (data: TContactRegister) => Promise<void>;
  contactDelete: () => Promise<void>;
}

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [contactList, setContactList] = useState<IUserData[]>([]);
  const [contact, setContact] = useState<IUserData | null>(null);
  const toast = useToast();
  const router = useRouter();
  const userEdit = async (data: IUserEdit) => {
    try {
      const response = await api.patch(`/client/${user?.id}`, data);

      toast({
        position: "bottom-right",
        title: "Successfully updated profile",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setUser(response.data);
    } catch (error: any) {
      toast({
        position: "bottom-right",
        title: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const userDelete = async () => {
    try {
      await api.delete(`/client/${user?.id}`);

      toast({
        position: "bottom-right",
        title: "Account successfully deleted!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        destroyCookie(null, "kenzie.token");
        setUser(null);
        router.push("/register");
      }, 2000);
    } catch (error: any) {
      toast({
        position: "bottom-right",
        title: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const contactRegister = async (data: TContactRegister) => {
    try {
      const response = await api.post("/contact", data);

      toast({
        position: "bottom-right",
        title: "Contact added!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setContactList([response.data, ...contactList]);
      return true;
    } catch (error: any) {
      toast({
        position: "bottom-right",
        title: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      return false;
    }
  };

  const contactEdit = async (data: TContactRegister) => {
    try {
      const response = await api.patch(`/contact/${contact?.id}`, data);
      toast({
        position: "bottom-right",
        title: "Contact edited!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setContactList(
        contactList.map((el) => {
          if (el.id == response.data.id) {
            return response.data;
          }
          return el;
        })
      );
    } catch (error: any) {
      toast({
        position: "bottom-right",
        title: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const contactDelete = async () => {
    try {
      await api.delete(`/contact/${contact?.id}`);

      toast({
        position: "bottom-right",
        title: "Contact removed!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setContactList(contactList.filter((el) => el.id !== contact?.id));
      setContact(null);
    } catch (error: any) {
      console.log(error);
      toast({
        position: "bottom-right",
        title: "Oops! An error occurred, please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userEdit,
        userDelete,
        contactList,
        setContactList,
        contactRegister,
        contact,
        setContact,
        contactEdit,
        contactDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

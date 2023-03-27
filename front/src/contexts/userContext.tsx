import { createContext, useState } from "react";
import { IProviderProps, IUserData, IUserEdit, IUserRegister, TContactRegister } from "@/types";
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
  contactRegister: (data: TContactRegister) => Promise<void>;
}

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [contactList, setContactList] = useState<IUserData[]>([]);
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
      const response = await api.delete(`/client/${user?.id}`);

      toast({
        position: "bottom-right",
        title: "Account successfully deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        destroyCookie(null, "kenzie.token");
        setUser(null);
        router.push("/register");
      }, 3000);
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

      setContactList([...contactList, response.data]);
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

  return (
    <UserContext.Provider
      value={{ user, setUser, userEdit, userDelete, contactList, setContactList, contactRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

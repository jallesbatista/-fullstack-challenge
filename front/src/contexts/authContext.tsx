import { createContext, useContext, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { IProviderProps, IUserLogin, IUserRegister } from "@/types";
import api from "@/services/api";
import { useToast } from "@chakra-ui/react";

interface AuthProviderData {
  setToken: (value: string) => void;
  login: (loginData: IUserLogin) => Promise<void>;
  token: string | undefined;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (registerData: IUserRegister) => Promise<void>;
}

export const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: IProviderProps) => {
  const [token, setToken] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const toast = useToast();

  const login = async (data: IUserLogin) => {
    try {
      const response = await api.post("/login", data);

      setCookie(null, "kenzie.token", response.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });

      setToken(response.data.token);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      toast({
        position: "bottom-right",
        title: "Logged in successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/dashboard");
    } catch (error: any) {
      toast({
        position: "bottom-right",
        title: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const userRegister = async (data: IUserRegister) => {
    try {
      const response = await api.post("/client", data);

      toast({
        position: "bottom-right",
        title: "Successfully registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/login");
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
    <AuthContext.Provider value={{ login, token, setToken, isLoading, setIsLoading, userRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

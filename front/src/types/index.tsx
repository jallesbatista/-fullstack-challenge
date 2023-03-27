import { ReactNode } from "react";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  tel: string;
}

export interface IUserEdit {
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  tel: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  tel: string;
  createdAt: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type TContactRegister = Omit<IUserRegister, "password" | "confirmPassword">;

export type TContactUpdate = Omit<IUserEdit, "password" | "confirmPassword">;

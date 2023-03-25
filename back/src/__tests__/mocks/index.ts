import { TClientRequest } from "../../interfaces/client.interfaces";
import { TSessionRequest } from "../../interfaces/session.interfaces";

export const mockedClient: TClientRequest = {
  name: "Client - teste",
  email: "clienteteste@mail.com",
  password: "123456",
  tel: "5579912345678",
};

export const mockedClientLogin: TSessionRequest = {
  email: mockedClient.email,
  password: mockedClient.password,
};

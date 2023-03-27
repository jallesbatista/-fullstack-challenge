import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import custonTheme from "@/styles/theme";
import { AuthProvider } from "@/contexts/authContext";
import "@fontsource/inter";
import { UserProvider } from "@/contexts/userContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={custonTheme}>
      <UserProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

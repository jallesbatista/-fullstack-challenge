import { GetServerSideProps, NextPage } from "next";
import api from "@/services/api";
import nookies, { destroyCookie } from "nookies";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { AuthContext } from "@/contexts/authContext";
import ContactsList from "@/components/contactsList";

const Dashboard: NextPage<Props> = ({ token }) => {
  const { setUser, setContactList } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const clientResponse = await api.get("/client", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const contactResponse = await api.get("/contact", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(clientResponse.data);
          setContactList(contactResponse.data);
          setToken(token);
        } catch (error) {
          destroyCookie(null, "kenzie.token");
          router.push("/login");
        }
      }
    };
    getUser();
  }, []);

  return (
    <>
      <Header />
      <ContactsList />
    </>
  );
};

interface Props {
  token: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies["kenzie.token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
};

export default Dashboard;

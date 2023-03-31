import RegisterForm from "@/components/registerForm";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";

const Register: NextPage<Props> = ({ token }) => {
  return <RegisterForm />;
};

export default Register;

interface Props {
  token: boolean;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies["kenzie.token"];
  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      token: !!token,
    },
  };
};

import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";

const Login = () => {
  return (
    <Box height="100vh" backgroundColor="#F1F3F5">
      <Box>
        <Header />
      </Box>
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="center"
        height="100vh"
      >
        <Box>
          <FormLogin />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Login;

import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import FormRegister from "../../components/FormRegister";
import Footer from "../../components/Footer";

const SignUp = () => {
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
          <FormRegister />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SignUp;

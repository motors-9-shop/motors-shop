import { ChakraProvider } from "@chakra-ui/react";
import MainRoutes from "./routes";
import { styleGuide } from "./styles/styleGuide";

const App = () => {
  return (
    <ChakraProvider theme={styleGuide}>
      <MainRoutes />
    </ChakraProvider>
  );
};

export default App;

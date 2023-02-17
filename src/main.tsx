import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { styleGuide } from "./styles/styleGuide";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={styleGuide}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

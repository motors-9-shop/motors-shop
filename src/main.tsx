import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { styleGuide } from "./styles/styleGuide";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={styleGuide}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

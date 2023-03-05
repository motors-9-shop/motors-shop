import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { styleGuide } from "./styles/styleGuide";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={styleGuide}>
        <UserProvider>
          <App />
        </UserProvider> 
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

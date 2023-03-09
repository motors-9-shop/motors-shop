import {
  InputGroup,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { useState } from "react";

interface IData {
  name: string;
  password: string;
}

const FormLogin = () => {
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  return (
    <form>
      <FormControl
        backgroundColor="#FDFDFD"
        borderRadius="4px"
        p={isSmallerThan720 ? "2px 30px" : "60px 60px"}
      >
        <InputGroup flexDirection="column" gap="15px">
          <Box>
            <Text as="h2" textStyle="heading-5-600">
              Login
            </Text>
          </Box>
          <Box>
            <FormLabel htmlFor="name" textStyle="input-label">
              Usuário
            </FormLabel>
            <Input
              placeholder="Digitar usuário"
              id="name"
              size="md"
              borderRadius="4px"
              width="100%"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="password" textStyle="input-label">
              Senha
            </FormLabel>
            <Input
              placeholder="Digitar senha"
              id="password"
              size="md"
              borderRadius="4px"
              width="100%"
            />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Text textStyle="body-2-500" cursor="pointer">
              Esqueci minha senha
            </Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="1.5625rem"
          >
            <Box>
              <Button
                textStyle="button-big-text"
                color="#FFF"
                backgroundColor="#4529E6"
                p={isSmallerThan720 ? "20px 100px" : "20px 130px"}
                type="submit"
              >
                Entrar
              </Button>
            </Box>
            <Text textStyle="body-2-400">Ainda não possui uma conta?</Text>
            <Link to="/signup">
              <Button
                p={isSmallerThan720 ? "20px 90px" : "20px 120px"}
                marginBottom="5px"
                type="button"
              >
                Cadastrar
              </Button>
            </Link>
          </Box>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default FormLogin;

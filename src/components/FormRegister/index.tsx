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

const FormRegister = () => {
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  return (
    <FormControl
      backgroundColor="#FDFDFD"
      borderRadius="4px"
      p={isSmallerThan720 ? "2px 30px" : "60px 60px"}
    >
      <InputGroup flexDirection="column" gap="15px">
        <Box>
          <Text as="h2" textStyle="heading-5-600" marginTop="20px">
            Cadastro
          </Text>
          <Text textStyle="body-2-500" marginTop="20px">
            Informações pessoais
          </Text>
        </Box>
        <Box>
          <FormLabel htmlFor="name" textStyle="input-label">
            Nome
          </FormLabel>
          <Input
            placeholder="Ex: Samuel Leitão"
            name="name"
            id="name"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="email" textStyle="input-label">
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="Ex: samuel@kenzie.com.br"
            name="password"
            id="password"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="cpf" textStyle="input-label">
            CPF
          </FormLabel>
          <Input
            type="number"
            placeholder="000.000.000-00"
            name="cpf"
            id="cpf"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="phone" textStyle="input-label">
            Celular
          </FormLabel>
          <Input
            type="tel"
            placeholder="(DDD) 90000-0000"
            name="phone"
            id="phone"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="DateOfBirth" textStyle="input-label">
            Data de nascimento
          </FormLabel>
          <Input
            type="date"
            placeholder="00/00/00"
            name="dateOfBirth"
            id="dateOfBirth"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="description" textStyle="input-label">
            Descrição
          </FormLabel>
          <Input
            placeholder="Digitar descrição"
            name="description"
            id="description"
            size="md"
            borderRadius="4px"
            width="100%"
            height="85px"
          />
        </Box>
        <Box>
          <Text textStyle="body-2-500" marginTop="15px">
            Informações de endereço
          </Text>
        </Box>
        <Box>
          <FormLabel htmlFor="cep" textStyle="input-label">
            CEP
          </FormLabel>
          <Input
            type="number"
            placeholder="00000.000"
            name="cep"
            id="cep"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box display="flex" gap="20px">
          <Box>
            <FormLabel htmlFor="state" textStyle="input-label">
              Estado
            </FormLabel>
            <Input
              placeholder="Digitar estado"
              name="state"
              id="state"
              size="md"
              borderRadius="4px"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="city" textStyle="input-label">
              Cidade
            </FormLabel>
            <Input
              placeholder="Digitar cidade"
              name="city"
              id="city"
              size="md"
              borderRadius="4px"
            />
          </Box>
        </Box>
        <Box>
          <FormLabel htmlFor="street" textStyle="input-label">
            Rua
          </FormLabel>
          <Input
            placeholder="Digitar rua"
            name="street"
            id="street"
            size="md"
            borderRadius="4px"
            width="100%"
          />
        </Box>
        <Box display="flex" gap="20px">
          <Box>
            <FormLabel htmlFor="number" textStyle="input-label">
              Número
            </FormLabel>
            <Input
              type="number"
              placeholder="Digitar número"
              name="number"
              id="number"
              size="md"
              borderRadius="4px"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="complement" textStyle="input-label">
              Complemento
            </FormLabel>
            <Input
              placeholder="Digitar complemento"
              name="complement"
              id="complement"
              size="md"
              borderRadius="4px"
            />
          </Box>
        </Box>
        <Box>
          <FormLabel htmlFor="password" textStyle="input-label">
            Senha
          </FormLabel>
          <Input
            type="password"
            placeholder="Digitar senha"
            name="password"
            id="password"
            size="md"
            borderRadius="4px"
          />
        </Box>
        <Box>
          <FormLabel htmlFor="confirmPassword" textStyle="input-label">
            Confirmar senha
          </FormLabel>
          <Input
            type="password"
            placeholder="Digitar senha"
            name="confirmPassword"
            id="confirmPassword"
            size="md"
            borderRadius="4px"
          />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="1.5625rem"
        >
          <Box>
            <Box>
              <Button
                textStyle="button-big-text"
                color="#FFF"
                backgroundColor="#4529E6"
                p={isSmallerThan720 ? "20px 9.375rem" : "20px 130px"}
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Box>
      </InputGroup>
    </FormControl>
  );
};

export default FormRegister;

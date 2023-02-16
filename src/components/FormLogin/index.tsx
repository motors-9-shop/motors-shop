import { InputGroup, Input, Button } from "@chakra-ui/react";

const FormLogin = () => {
  return (
    <form>
      <InputGroup flexDirection="column">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <label htmlFor="user">Usuário</label>
          <Input
            placeholder="Digitar usuário"
            name="user"
            id="user"
            size="md"
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="Digitar senha"
            name="password"
            id="password"
            size="md"
          />
        </div>
        <div>
          <p>Esqueci minha senha</p>
        </div>
        <div>
          <Button>Entrar</Button>
        </div>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Button>Cadastrar</Button>
        </div>
      </InputGroup>
    </form>
  );
};

export default FormLogin;

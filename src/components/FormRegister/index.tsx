import { InputGroup, Input, Button } from "@chakra-ui/react";

const FormRegister = () => {
  return (
    <form>
      <InputGroup flexDirection="column">
        <div>
          <h2>Cadastro</h2>
        </div>
        <p>Informações pessoais</p>
        <div>
          <label htmlFor="name">Nome</label>
          <Input
            placeholder="Ex: Samuel Leão"
            name="name"
            id="name"
            size="md"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            name="email"
            id="email"
            size="md"
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <Input placeholder="000.000.000-00" name="cpf" id="cpf" size="md" />
        </div>
        <div>
          <label htmlFor="cellphone">Celular</label>
          <Input
            placeholder="(DDD) 90000-0000"
            name="cellphone"
            id="cellphone"
            size="md"
          />
        </div>
        <div>
          <label htmlFor="birthDate">Data de nascimento</label>
          <Input
            placeholder="00/00/00"
            name="birthDate"
            id="birthDate"
            size="md"
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <Input
            placeholder="Digitar descrição"
            name="description"
            id="description"
            height="70px"
          />
        </div>
        <p>Informações de endereço</p>
        <div>
          <label htmlFor="cep">CEP</label>
          <Input placeholder="00000.000" name="cep" id="cep" size="md" />
        </div>
        <InputGroup flexDirection="row">
          <div>
            <label htmlFor="state">Estado</label>
            <Input
              placeholder="Digitar estado"
              name="state"
              id="state"
              size="md"
            />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <Input
              placeholder="Digitar cidade"
              name="city"
              id="city"
              size="md"
            />
          </div>
        </InputGroup>
        <div>
          <label htmlFor="adress">Rua</label>
          <Input
            placeholder="Digitar rua"
            name="adress"
            id="adress"
            size="md"
          />
        </div>
        <InputGroup flexDirection="row">
          <div>
            <label htmlFor="number">Número</label>
            <Input
              placeholder="Digitar número"
              name="number"
              id="number"
              size="md"
            />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <Input
              placeholder="Ex: apart 307"
              name="complement"
              id="complement"
              size="md"
            />
          </div>
        </InputGroup>
        <div>
          <label htmlFor="accountType">Tipo de conta</label>
          <div>
            <Button>Comprador</Button>
            <Button>Anunciante</Button>
          </div>
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
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <Input
            placeholder="Confirmar senha"
            name="confirmPassword"
            id="confirmPassword"
            size="md"
          />
        </div>
        <div>
          <Button>Finalizar cadastro</Button>
        </div>
      </InputGroup>
    </form>
  );
};

export default FormRegister;

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          Motors <span>shop</span>
        </h1>
      </div>
      <Button bg="white">Carros</Button>
      <Button bg="white">Motos</Button>
      <Button bg="white">Leilão</Button>
      <Button bg="white" borderTop="1px solid #ADB5BD" borderRadius={"none"}>
        Fazer Login
      </Button>
      <Button bg="white">Cadastrar</Button>
      {/* <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>Carros</MenuItem>
          <MenuItem>Motos</MenuItem>
          <MenuItem>Leilão</MenuItem>
          <MenuItem borderTop="1px solid #ADB5BD">Fazer Login</MenuItem>
          <MenuItem>
            <Button>Cadastrar</Button>
          </MenuItem>
        </MenuList>
      </Menu> */}
    </header>
  );
};

export default Header;

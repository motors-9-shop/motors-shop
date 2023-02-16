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
      <Menu>
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
      </Menu>
    </header>
  );
};

export default Header;

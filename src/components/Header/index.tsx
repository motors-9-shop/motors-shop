import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Box,
  Center,
  HStack,
  Link,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import UserCard from "../UserCard";

const Header = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");
  const [user, setUser] = useState({
    name: "Wilson Mesquita",
  });

  return (
    <Center
      w="100%"
      h="60px"
      bg="grey.10"
      borderBottom="2px solid var(--chakra-colors-grey-6)"
    >
      <Box
        width="95%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image src={Logo} />
        </Box>
        <HStack spacing="24px" h="100%">
          {isLargerThan720 && (
            <>
              <Link href="#">Carros</Link>
              <Link href="#">Motos</Link>
              <Link href="#">Leilão</Link>
              <Divider
                w="2px"
                bg="grey.6"
                color="grey.6"
                orientation="vertical"
              />
            </>
          )}
          {isLargerThan720 ? (
            <>
              {user ? (
                <Menu>
                  <MenuButton as={UserCard} />
                  <MenuList textStyle="body-1-400" color="grey.2">
                    <MenuItem>Editar Perfil</MenuItem>
                    <MenuItem>Editar Endereço</MenuItem>
                    <MenuItem>Minhas Compras</MenuItem>
                    <MenuItem>Sair</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Button variant="ghost" textStyle="body-1-600">
                    Fazer Login
                  </Button>
                  <Button variant="outline" textStyle="button-big-text">
                    Cadastrar
                  </Button>
                </>
              )}
            </>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList textStyle="body-1-400" color="grey.2">
                <MenuItem>Carros</MenuItem>
                <MenuItem>Motos</MenuItem>
                <MenuItem>Leilão</MenuItem>
                {isSmallerThan720 && (
                  <>
                    <MenuItem borderTop="1px solid var(--chakra-colors-grey-4)">
                      Fazer Login
                    </MenuItem>
                    <MenuItem>Cadastrar</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Box>
    </Center>
  );
};

export default Header;

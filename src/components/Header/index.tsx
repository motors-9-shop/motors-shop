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
import { useContext, useState } from "react";
import Logo from "../../assets/logo.svg";
import UserCard from "../UserCard";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import StyledButton from "../StyledButton";
import { ModalEditProfile } from "../FormEditProfile";
import { ModalEditAddress } from "../FormEditAddress";

const Header = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);

  const navigate = useNavigate();

  const scrollToCars = () => {
    const car = document.getElementById("cars");

    if (car)
      car.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  const scrollToMotocycles = () => {
    const motocycle = document.getElementById("motocycles");

    if (motocycle)
      motocycle.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  const scrollToAuctions = () => {
    const auction = document.getElementById("auctions");

    if (auction)
      auction.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

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
          <Image src={Logo} onClick={() => navigate("/")} cursor="pointer" />
        </Box>
        <HStack spacing="24px" h="100%">
          {isLargerThan720 && (
            <>
              <StyledButton
                variant="link"
                textStyle="body-2-400"
                onClick={scrollToCars}
              >
                Carros
              </StyledButton>
              <StyledButton
                variant="link"
                textStyle="body-2-400"
                onClick={scrollToMotocycles}
              >
                Motos
              </StyledButton>
              <StyledButton
                variant="link"
                textStyle="body-2-400"
                onClick={scrollToAuctions}
              >
                Leilão
              </StyledButton>
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
                  <MenuButton>
                    <UserCard username={user?.name} />
                  </MenuButton>
                  <MenuList textStyle="body-1-400" color="grey.2">
                    <MenuItem>Editar Perfil</MenuItem>
                    <MenuItem>Editar Endereço</MenuItem>
                    <MenuItem>Minhas Compras</MenuItem>
                    <MenuItem onClick={() => logout()}>Sair</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    textStyle="body-1-600"
                    onClick={() => navigate("/login")}
                  >
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
                    {user ? (
                      <MenuItem onClick={() => logout()}>Sair</MenuItem>
                    ) : (
                      <>
                        <MenuItem
                          borderTop="1px solid var(--chakra-colors-grey-4)"
                          onClick={() => navigate("/login")}
                        >
                          Fazer Login
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/register")}>
                          Cadastrar
                        </MenuItem>
                      </>
                    )}
                  </>
                )}
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Box>
      <ModalEditProfile isOpen={isOpen} setIsOpen={setIsOpen} />
      <ModalEditAddress
        isOpenAddress={isOpenAddress}
        setIsOpenAddress={setIsOpenAddress}
      />
    </Center>
  );
};

export default Header;

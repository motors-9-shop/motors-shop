import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface IModalProf {
  isOpen: boolean;
  setIsOpen: any;
}

export const ModalEditProfile = ({ isOpen, setIsOpen }: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder="Nome" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Senha</FormLabel>
              <Input placeholder="Senha" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Data de nascimento</FormLabel>
              <Input placeholder="Data de nascimento" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="E-mail" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Telefone</FormLabel>
              <Input placeholder="Telefone" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Input placeholder="Descrição" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

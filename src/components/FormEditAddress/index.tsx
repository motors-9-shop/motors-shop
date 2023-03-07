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
  isOpenAddress: boolean;
  setIsOpenAddress: any;
}

export const ModalEditAddress = ({
  isOpenAddress,
  setIsOpenAddress,
}: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenAddress}
        onClose={() => setIsOpenAddress(!isOpenAddress)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Endereço</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Cidade</FormLabel>
              <Input ref={initialRef} placeholder="Cidade" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Estado</FormLabel>
              <Input placeholder="Estado" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rua</FormLabel>
              <Input placeholder="Rua" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="E-mail" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Número</FormLabel>
              <Input placeholder="Número" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Complemento</FormLabel>
              <Input placeholder="Complemento" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CEP</FormLabel>
              <Input placeholder="CEP" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={() => setIsOpenAddress(!isOpenAddress)}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

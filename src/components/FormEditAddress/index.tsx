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

interface IAddress {
  city: string;
  state: string;
  street: string;
  email: string;
  number: string | number;
  complement: string;
  cep: string;
}

export const ModalEditAddress = ({
  isOpenAddress,
  setIsOpenAddress,
}: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { handleSubmit, register } = useForm<IUser>();

  const EditAddress = (data: IAddress) => {
    api
      .patch(
        `/users/${userId}`,
        {
          address: data,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

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
            <form onSubmit={handleSubmit(register)}>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Cidade"
                  {...register("city")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Estado</FormLabel>
                <Input placeholder="Estado" {...register("state")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Rua</FormLabel>
                <Input placeholder="Rua" {...register("street")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder="E-mail" {...register("email")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Número</FormLabel>
                <Input placeholder="Número" {...register("number")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Complemento</FormLabel>
                <Input placeholder="Complemento" {...register("complement")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>CEP</FormLabel>
                <Input placeholder="CEP" {...register("cep")} />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => EditAddress()}>
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

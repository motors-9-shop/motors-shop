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
import { useForm } from "react-hook-form";
import { IAddress } from "../../interfaces";
import { useContext } from "react" 
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services";

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
  const { user } = useContext(UserContext);

  const { handleSubmit, register } = useForm<IAddress>({
    resolver: async (data) => {

      (data.address['state'])
      Object.keys(data.address).forEach((key) => data.address[key] === "" && delete data.address[key]);
    
      return {
        values: data,
        errors: {},
      };
    },
  });

  const EditAddress = async (reqData: IAddress<Partial>) => {    
    reqData.address.number = Number(reqData.address.number)
    
    const req = await api.patch(`/users/${user.id}`, reqData)

    console.log()

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
            <form onSubmit={handleSubmit(EditAddress)}>
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={user?.address.city}
                  {...register("address.city")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Estado</FormLabel>
                <Input placeholder={user?.address.state} {...register("address.state")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Rua</FormLabel>
                <Input placeholder={user?.address.street} {...register("address.street")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Número</FormLabel>
                <Input placeholder={String(user?.address.number)} {...register("address.number")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Complemento</FormLabel>
                <Input placeholder={user?.address.complement} {...register("address.complement")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>CEP</FormLabel>
                <Input placeholder={user?.address.cep} {...register("address.cep")} />
              </FormControl>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Salvar
              </Button>
              <Button onClick={() => setIsOpenAddress(!isOpenAddress)}>
                Cancelar
              </Button>
            </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

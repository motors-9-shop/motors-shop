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

interface FormValues  {
  address: PartialIAddress
}

export const ModalEditAddress = ({
  isOpenAddress,
  setIsOpenAddress,
}: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { user, setUser } = useContext(UserContext);

  const { handleSubmit, register } = useForm<FormValues>({
    resolver: async (data: FormValues) => {

      Object.keys(data.address).forEach((key: string) => {
        if (key == "city" || key =="state" || key == "street" || key == "number" || key == "complement" || key == "cep" ) {
          data.address[key] === "" && delete data.address[key];
        }
      });
      return {
        values: data,
        errors: {},
      };
    },
  });

  const EditAddress = async (reqData: FormValues) => {
    const newData = {address: {...user?.address, ...reqData.address}}
    
    newData.address.number = Number(newData.address.number)

    delete newData.address.id
    
    const { data } = await api.patch(`/users/${user?.id}`, newData)

    console.log(data)
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
                  placeholder={user?.address?.city}
                  {...register("address.city")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Estado</FormLabel>
                <Input placeholder={user?.address?.state} {...register("address.state")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Rua</FormLabel>
                <Input placeholder={user?.address?.street} {...register("address.street")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Número</FormLabel>
                <Input placeholder={String(user?.address?.number)} {...register("address.number")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Complemento</FormLabel>
                <Input placeholder={user?.address?.complement} {...register("address.complement")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>CEP</FormLabel>
                <Input placeholder={user?.address?.cep} {...register("address.cep")} />
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

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
import { IUser } from "../../interfaces";
import { api } from "../../services";
import { useContext } from "react" 
import { UserContext } from "../../contexts/userContext";

interface IModalProf {
  isOpen: boolean;
  setIsOpen: any;
}

export const ModalEditProfile = ({ isOpen, setIsOpen }: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { user } = useContext(UserContext);

  const { handleSubmit, register } = useForm<IUser>({
    resolver: async (data) => {
      Object.keys(data).forEach((key) => data[key] === "" && delete data[key]);
      return {
        values: data,
        errors: {},
      };
    },
  });

  const EditProfile = async (reqData: IUser<Partial>) => {
    const req = await api.patch(`/users/${user.id}`, reqData)
  };

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
            <form onSubmit={handleSubmit(EditProfile)}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={user?.name}
                  {...register("name")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>CPF</FormLabel>
                <Input placeholder={user?.cpf} {...register("cpf")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  placeholder={user?.dateOfBirth}
                  {...register("dateOfBirth")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder={user?.email} {...register("email")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Telefone</FormLabel>
                <Input placeholder={user?.phone} {...register("phone")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descrição</FormLabel>
                <Input placeholder={user?.description} {...register("description")} />
              </FormControl>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Salvar
              </Button>
              <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
            </ModalFooter>
            </form>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

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

interface IModalProf {
  isOpen: boolean;
  setIsOpen: any;
}

export const ModalEditProfile = ({ isOpen, setIsOpen }: IModalProf) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { handleSubmit, register } = useForm<IUser>();

  const EditProfile = (data: IUser) => {
    api
      .patch(`/users/${userId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(register)}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Nome"
                  {...register("name")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Senha</FormLabel>
                <Input placeholder="Senha" {...register("password")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  placeholder="Data de nascimento"
                  {...register("dateOfBirth")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder="E-mail" {...register("email")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Telefone</FormLabel>
                <Input placeholder="Telefone" {...register("phone")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descrição</FormLabel>
                <Input placeholder="Descrição" {...register("description")} />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => EditProfile()}>
              Salvar
            </Button>
            <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

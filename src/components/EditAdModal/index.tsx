import { HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps, RadioGroup, Text, Textarea, useMediaQuery, VStack } from "@chakra-ui/react";
import { ReactNode, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../contexts/profileContext";
import { IAd } from "../../interfaces";
import InputField from "../InputField";
import MoneyInput from "../MoneyInput";
import RadioButton from "../RadioButton";
import StyledButton from "../StyledButton";

interface EditAdModal {
    isOpen: boolean
    onClose: () => void
    ad: IAd
}

const EditAdModal = ({ isOpen, onClose, ad }: EditAdModal) => {
    const { handleSubmit, control, register, watch} = useForm()
    const [inputImagesCount, setInputImagesCount] = useState<null[]>([])
    const [isSmallerThan420] = useMediaQuery('(max-width: 420px)')
    const { profileUpdateAd, profileDeleteAd } = useContext(ProfileContext)

    const onSubmit = (data: any) => {
        data.isActive = Boolean(data.isActive)
        data.vehicle.km = Number(data.vehicle.km)
        data.vehicle.year = Number(data.vehicle.year)
        data.price = data.price ? data.price : ad.price

        profileUpdateAd(ad.id, data)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textStyle="heading-7-500">Editar anuncio</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                        <RadioGroup gap="18px" display="flex" flexDir="column">
                            <Text textStyle="body-2-500">Tipo de anuncio</Text>
                            <HStack>
                                <RadioButton
                                    label="Venda"
                                    value="sell"
                                    control={control}
                                    name="type"
                                    defaultValue={ad.type}
                                    w="49%"
                                />
                                <RadioButton
                                    label="Leilão"
                                    value="auction"
                                    control={control}
                                    name="type"
                                    defaultValue={ad.type}
                                    w="49%"
                                />
                            </HStack>
                        </RadioGroup>
                        <Text textStyle="body-2-500" alignSelf="start">Infomações do veículo</Text>
                        <InputField label="Título" control={control} name="vehicle.name" placeholder="Digitar título" defaultValue={ad.vehicle.name} />
                        <HStack>
                            <InputField label="Ano" control={control} name="vehicle.year" placeholder="Digitar ano" type="number" defaultValue={ad.vehicle.year} />
                            <InputField label="Quilometragem" control={control} name="vehicle.km" placeholder="0" type="number" defaultValue={ad.vehicle.km} />
                            {!isSmallerThan420 && <MoneyInput control={control} name="price" label="Preço" placeholder={`${ad.price}`} />}
                        </HStack>
                        { isSmallerThan420 && <MoneyInput control={control} name="price" label="Preço" placeholder={`${ad.price}`} />}
                        <VStack spacing="8px">
                            <Text alignSelf="start" textStyle="input-label">Descrição</Text>
                            <Textarea {...register("description")} placeholder="Digitar descrição" defaultValue={ad.description}/>
                        </VStack>
                        <RadioGroup gap="18px" display="flex" flexDir="column">
                            <Text textStyle="body-2-500">Tipo de veículo</Text>
                            <HStack>
                                <RadioButton
                                    label="Carro"
                                    value="car"
                                    control={control}
                                    name="vehicle.type"
                                    defaultValue={ad.vehicle.type}
                                    w="49%"
                                />
                                <RadioButton
                                    label="Moto"
                                    value="motocycle"
                                    control={control}
                                    name="vehicle.type"
                                    w="49%"
                                />
                            </HStack>
                        </RadioGroup>
                        <RadioGroup gap="18px" display="flex" flexDir="column">
                            <Text textStyle="body-2-500">Publicado</Text>
                            <HStack>
                                <RadioButton
                                    label="Sim"
                                    value={true.toString()}
                                    control={control}
                                    name="isActive"
                                    defaultValue={ad.isActive.toString()}
                                    w="49%"
                                />
                                <RadioButton
                                    label="Não"
                                    value={false.toString()}
                                    control={control}
                                    name="isActive"
                                    w="49%"
                                />
                            </HStack>
                        </RadioGroup>
                        <InputField label="Imagem da capa" control={control} name="vehicle.bannerUrl" placeholder="Inserir URL da imagem" defaultValue={ad.vehicle.bannerUrl}/>
                        {inputImagesCount.map((_, index) => 
                            <InputField
                                key={index}
                                label={`${index + 1}° Imagem da galeria`} 
                                control={control} 
                                name={`vehicle.images[${index}]`} 
                                placeholder="Inserir URL da imagem"
                            />
                        )}
                        <StyledButton 
                            variant="brandOpacity" 
                            w="100%" 
                            maxW="315px" 
                            fontSize="14px" 
                            textStyle="button-medium-text" 
                            onClick={() => setInputImagesCount((oldlist) => [...oldlist, null])}
                        >
                            Adicionar campo para imagem da galeria
                        </StyledButton>
                        <HStack justifyContent="flex-end">
                            <StyledButton variant="negative" w="49%" onClick={() => {
                                profileDeleteAd(ad.id)
                                onClose()
                            }}
                            >
                                Excluir anúncio
                            </StyledButton>
                            <StyledButton variant="brand" w="49%" type="submit">Editar anúncio</StyledButton>
                        </HStack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default EditAdModal
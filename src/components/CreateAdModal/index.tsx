import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Text, Textarea, useMediaQuery, useRadioGroup, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../contexts/userContext"
import InputField from "../InputField"
import RadioButton from "../RadioButton"
import StyledButton from "../StyledButton"

interface CreateAdModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface CreateAdValues {
    type: "sell" | "auction"
    price: number
    description: string,
    vehicle: {
        name: string
        km: number
        year: number
        type: "car" | "motocycle"
        bannerUrl: string
        images?: string[]
    }
}

const CreateAdModal = ({ isOpen, onClose }: CreateAdModalProps) => {
    const [inputImagesCount, setInputImagesCount] = useState<null[]>([])
    const [isSmallerThan420] = useMediaQuery('(max-width: 420px)')    
    const { handleSubmit, control, register, watch} = useForm()
    const { createUserAd } = useContext(UserContext)

    const requiredFields = ["type", "vehicle.name", "vehicle.year", "vehicle.km", "price", "description", "vehicle.bannerUrl"]

    const allRequiredFieldsFilled = requiredFields.every((field) =>
        Boolean(watch(field))
    );

    const onSubmit = async (values: any) => {
        const remove = () => {
            values.vehicle.images?.forEach((image:any, index:any, array:any) => {
                if (!!image === false){
                    values.vehicle.images.splice(index, 1)
                    remove()
                }
            })
        }
        remove()
        if(values.vehicle?.images?.length === 0){
            delete values.vehicle.images    
        }

        values.price = Number(values.price)
        values.vehicle.year = Number(values.vehicle.year)
        values.vehicle.km = Number(values.vehicle.km)

        createUserAd(values)

        onClose()

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textStyle="heading-7-500">Criar anuncio</ModalHeader>
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
                                    defaultValue="sell"
                                    w="49%"
                                />
                                <RadioButton
                                    label="Leilão"
                                    value="auction"
                                    control={control}
                                    name="type"
                                    w="49%"
                                />
                            </HStack>
                        </RadioGroup>
                        <Text textStyle="body-2-500" alignSelf="start">Infomações do veículo</Text>
                        <InputField label="Título" control={control} name="vehicle.name" placeholder="Digitar título"/>
                        <HStack>
                            <InputField label="Ano" control={control} name="vehicle.year" placeholder="Digitar ano" type="number" />
                            <InputField label="Quilometragem" control={control} name="vehicle.km" placeholder="0" type="number" />
                            {!isSmallerThan420 && <InputField label="Digitar preço" control={control} name="price" placeholder="Digitar preço" type="number" />}
                        </HStack>
                        { isSmallerThan420 && <InputField label="Digitar preço" control={control} name="price" placeholder="Digitar preço" type="number" />}
                        <VStack spacing="8px">
                            <Text alignSelf="start" textStyle="input-label">Descrição</Text>
                            <Textarea {...register("description")} placeholder="Digitar descrição"/>
                        </VStack>
                        <RadioGroup gap="18px" display="flex" flexDir="column">
                            <Text textStyle="body-2-500">Tipo de anuncio</Text>
                            <HStack>
                                <RadioButton
                                    label="Carro"
                                    value="car"
                                    control={control}
                                    name="vehicle.type"
                                    defaultValue="car"
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
                        <InputField label="Imagem da capa" control={control} name="vehicle.bannerUrl" placeholder="Inserir URL da imagem"/>
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
                            <StyledButton variant="negative" w="49%" maxW="126px" onClick={onClose}>Cancelar</StyledButton>
                            <StyledButton variant="brand" type="submit" maxW="193px" isDisabled={!allRequiredFieldsFilled}>Criar anúncio</StyledButton>
                        </HStack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CreateAdModal
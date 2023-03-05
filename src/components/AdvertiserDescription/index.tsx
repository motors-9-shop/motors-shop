import { Avatar, Box, Button, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import CreateAdModal from "../CreateAdModal";

interface IAdvertiserDescriptionProps {
    name: string;
    description: string
    owner: boolean
}


const AdvertiserDescription = ({name, description, owner}: IAdvertiserDescriptionProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex 
            w="100%" 
            maxW="1240px"  
            bg="grey.10" 
            margin="75px auto 0"
            padding="3rem"
            gap="24px"
            flexDir="column"
        >
            <Avatar size="lg" name={name} />    
            <Flex gap="8px">
                <Text as="h6" textStyle="heading-6-600">{name}</Text>
                <Text padding="4px 8px" textStyle="body-2-500" color="brand.1" backgroundColor="brand.4">Anunciante</Text>
            </Flex>
            <Text textStyle="body-1-400">{description}</Text>
            {
            owner && 
                <>
                    <Button 
                        variant="outline" 
                        colorScheme='blue' 
                        w="160px" 
                        textStyle="button-big-text"
                        onClick={onOpen}
                    >
                        Criar anuncio
                    </Button>
                    <CreateAdModal isOpen={isOpen} onClose={onClose}/>
                </>
            }
        </Flex>
    )
}

export default AdvertiserDescription
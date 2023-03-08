import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Image, Text, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router"
import { UserContext } from "../../contexts/userContext"
import { IAd } from "../../interfaces"
import AdvertiserAvatar from "../AdvertiserAvatar"
import EditAdModal from "../EditAdModal"

interface IAdCardProps {
    ad: IAd
    badge?: boolean
}   

const AdCard = ({ad, badge}: IAdCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { user } = useContext(UserContext)

    const isOwner = user?.id === ad.user.id
    
    const navigate = useNavigate()

    return (
        <Card 
            minW="312px"
            maxW="312px" 
            variant="unstyled" 
            gap="16px"
            cursor="pointer"
            bgColor="transparent"
        >
            <CardHeader onClick={() => navigate(`/ad/${ad.id}`)}>
                <Image
                    src={ad.vehicle.bannerUrl}
                    alt='Green double couch with wooden legs'
                    w="100%"
                    h="150px"
                    bg="grey.7"
                    objectFit="cover"
                    position="relative" 
                />
                {badge && <Text 
                    textStyle="body-2-500"
                    color="whiteFixed"
                    padding="0 8px"
                    bgColor="brand.1"
                    position="absolute"
                    top="12px"
                    left="12px"
                >{ad.isActive ? "Ativo" : "Inativo"}</Text>}
                <Text marginTop="16px" textStyle="heading-7-600">{ad.vehicle.name}</Text>
            </CardHeader>
            <CardBody gap="16px" display="flex" flexDir="column">
                <Text 
                    h="40px"
                    noOfLines={2}
                    textStyle="body-2-400" 
                    color="grey.2"
                >
                    {ad.description}
                </Text>
                { !isOwner && <AdvertiserAvatar user={ad.user} />}
                <Box display="flex" justifyContent="space-between">
                    <Box textStyle="body-2-500" color="brand.1" display="flex" gap="12px"> 
                        <Text p="4px 8px" bg="brand.4" borderRadius="4px">{ad.vehicle.km} KM</Text>
                        <Text p="4px 8px" bg="brand.4" borderRadius="4px">{ad.vehicle.year}</Text>
                    </Box>
                    <Text textStyle="heading-7-500" color="grey.1">{ad.price}</Text>
                </Box>
                { isOwner && 
                <ButtonGroup textStyle="button-big-text" variant="outline">
                    <Button onClick={onOpen}>Editar</Button>
                    <Button>Ver como</Button>    
                    <EditAdModal isOpen={isOpen} onClose={onClose} ad={ad}/>
                </ButtonGroup>}
            </CardBody>
        </Card>
    )
}

export default AdCard
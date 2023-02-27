import { Avatar, Box, Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { Navigate } from "react-router-dom"
import { IAd } from "../../interfaces"

interface IAdCardProps {
    ad: IAd
}

const AdCard = ({ad}: IAdCardProps) => {

    const navigate = useNavigate()

    return (
        <Card 
            minW="312px" 
            variant="unstyled" 
            gap="16px"
            cursor="pointer"
            onClick={() => navigate(`ads/${ad.id}`)}
        >
            <CardHeader>
                <Image
                    src={ad.vehicle.bannerUrl}
                    alt='Green double couch with wooden legs'
                    w="100%"
                    h="150px"
                    padding="0 25px"
                    bg="grey.7"
                    objectFit="cover" 
                />
                <Text marginTop="16px" textStyle="heading-7-600">{ad.vehicle.name}</Text>
            </CardHeader>
            <CardBody gap="16px" display="flex" flexDir="column">
                <Text 
                    noOfLines={2} 
                    textStyle="body-2-400" 
                    color="grey.2"
                >
                    {ad.description}
                </Text>
                <Box color="grey.2" textStyle="body-2-500" display="flex" gap="8px">
                    <Avatar name={ad.user.name} size="xs"/>
                    <Text color="grey.2" textStyle="body-2-500">{ad.user.name}</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box textStyle="body-2-500" color="brand.1" display="flex" gap="12px"> 
                        <Text p="4px 8px" bg="brand.4" borderRadius="4px">{ad.vehicle.km} KM</Text>
                        <Text p="4px 8px" bg="brand.4" borderRadius="4px">{ad.vehicle.year}</Text>
                    </Box>
                    <Text textStyle="heading-7-500" color="grey.1">{ad.price}</Text>
                </Box>
            </CardBody>
        </Card>
    )
}

export default AdCard
import { Box, Flex, FlexProps, HStack, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import { IAd } from "../../interfaces"
import AdCard from "../AdCard"

interface IAdListProps extends FlexProps {
    adList: IAd[]
    title: string
    badge?: boolean
}

const AdList = ({adList, title, badge, ...rest}: IAdListProps) => {
    const [isSmallerThan720] = useMediaQuery('(max-width: 720px)')

    return (
        <Flex
            flexDir="column"
            padding={isSmallerThan720 ? "2rem 0" : "80px 0"}
            gap="2rem"
            {...rest}
        >
            <Text textStyle="heading-5-600">{title}</Text>
            <HStack 
                spacing={8} 
                overflowX="scroll"
                css={ isSmallerThan720 && {
                    '&::-webkit-scrollbar': {
                    display: 'none',
                    }
                }}
            >
                {
                    adList.length === 0  ? 
                    <Text textStyle="heading-6-600">Sem anúncios de {title} disponíveis</Text>
                    : 
                    adList?.map(ad => <AdCard ad={ad} key={ad.id} badge={badge} />) 
                }
            </HStack>
        </Flex>

    )
}

export default AdList
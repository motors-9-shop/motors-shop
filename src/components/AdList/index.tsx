import { Box, Flex, HStack, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import { IAd } from "../../interfaces"
import AdCard from "../AdCard"

interface IAdListProps {
    adList: IAd[]
    title: string
    badge?: boolean
}

const AdList = ({adList, title, badge}: IAdListProps) => {
    const [isSmallerThan720] = useMediaQuery('(max-width: 720px)')

    return (
        <Flex
            flexDir="column"
            padding={isSmallerThan720 ? "2rem 0" : "80px 0"}
            gap="2rem"
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
                    adList?.map(ad => <AdCard ad={ad} key={ad.id} badge={badge} />) 
                }
            </HStack>
        </Flex>

    )
}

export default AdList
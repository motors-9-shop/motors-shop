import { HStack, SimpleGrid, Stack } from "@chakra-ui/react"
import { IAd } from "../../interfaces"
import AdCard from "../AdCard"

interface IAdListProps {
    adList: IAd[]
}

const AdList = ({adList}: IAdListProps) => {
    return (
        <HStack 
            spacing={8} 
            overflowX="scroll"
            css={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                }
              }}
        >
            {
                adList?.map(ad => <AdCard ad={ad} key={ad.id}/>) 
            }
        </HStack>
    )
}

export default AdList
import { HStack, SimpleGrid, Stack } from "@chakra-ui/react"
import { IAd } from "../../interfaces"
import AdCard from "../AdCard"

interface IAdListProps {
    adList: IAd[],
    filter?: "car" | "motocycle"
}

const AdList = ({adList, filter}: IAdListProps) => {
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
            filter ? 
            adList.filter(ad => ad.vehicle.type == filter).filter(ad => ad.type == "sell").map(ad => <AdCard ad={ad} key={ad.id}/>) 
            : 
            adList.filter(ad => ad.type == "sell").map((ad) => <AdCard ad={ad} key={ad.id}/>)
            }
        </HStack>
    )
}

export default AdList
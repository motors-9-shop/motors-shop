import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import FilterBy from "../../components/FilterBy"
import Header from "../../components/Header"
import { IAd, } from "../../interfaces"
import AdList from "../../components/AdList"
import { useEffect, useState } from "react"
import { getAllAd } from "../../services"
import Footer from "../../components/Footer"

const Home = () => {
  const [adList, setAdList] = useState<IAd[]>([])
  const [isSmallerThan720] = useMediaQuery('(max-width: 720px)')

  useEffect(() => {
      (async function(){
          const ads = await getAllAd()
          setAdList(ads)
      })()
  }, [])

  return (
    <Box>
        <Header />
        <FilterBy />
        <Box 
            display="flex"
            p={isSmallerThan720 ? "32px 16px" : "32px 32px"} 
            flexDir="column"
        >   
            <Stack spacing={8}>
                <Flex gap="1rem" flexDir="column">
                    <Text as="h5" textStyle="heading-5-600">Carros</Text>
                    <AdList adList={adList} filter="car"/>
                </Flex>
                <Flex gap="1rem" flexDir="column">
                    <Text as="h5" textStyle="heading-5-600">Motos</Text>
                    <AdList adList={adList} filter="motocycle"/>
                </Flex>
            </Stack>
        </Box>
        <Footer />
    </Box>
  )
}

export default Home
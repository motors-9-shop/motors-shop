import { Box, Button, Center, Heading, Text, useMediaQuery } from "@chakra-ui/react"

const FilterBy = () => {
    const [isSmallerThan720] = useMediaQuery('(max-width: 720px)')

    const scrollToCars = () => {
        const carList = document.getElementById('cars')

        if(carList)
        carList.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    const scrollToMotocycles = () => {
        const motocycleList = document.getElementById('motocycles')

        if(motocycleList)
        motocycleList.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <Center 
            bg="brand.2" 
            padding="160px 12px"
            flexDir="column" 
            gap="20px" 
            textAlign="center"
        >
            <Heading as="h1" textStyle="heading-1-700" maxW="545px" color="grey.10">
                Velocidade e experiência em um lugar feito para você
            </Heading>
            <Text textStyle="body-1-400" color="grey.9">
                Um ambiente feito para você explorar o seu melhor   
            </Text>
            <Center flexDir={isSmallerThan720 ? "column" : "row"} gap="20px" color="grey.10" w="100%">
                <Button variant="outline" w={isSmallerThan720 ? "100%" : "182px"} onClick={scrollToCars}>Carros</Button>
                <Button variant="outline" w={isSmallerThan720 ? "100%" : "182px"} onClick={scrollToMotocycles}>Motos</Button>
            </Center>
        </Center>
    )
}

export default FilterBy
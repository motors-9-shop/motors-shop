import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Card maxW="sm" boxShadow="none">
      <CardBody>
        <Image
          width="22.8125rem"
          backgroundColor="#E9ECEF"
          src="https://img2.icarros.com/dbimg/imgmodelo/2/2381_6.png"
          alt=""
          borderRadius="lg"
          _hover={{
            border: "2px solid #4529E6",
            cursor: "pointer",
          }}
        />
        <Stack mt="6" spacing="3">
          <Heading
            fontFamily="Lexend"
            fontWeight="600"
            fontSize="18px"
            color="#212529"
          >
            Living room Sofa
          </Heading>
          <Text
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            color="#495057"
          >
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
        <Stack mt="3" spacing="0" flexDirection="row">
          <Text
            fontFamily="Inter"
            fontWeight="500"
            fontSize="14px"
            background="#5126EA"
            borderRadius="50%"
            width="25px"
            height="25px"
            textAlign="center"
            marginRight="8px"
            color="#FFF"
          >
            R
          </Text>
          <Text
            fontFamily="Inter"
            fontWeight="500"
            fontSize="14px"
            color="#495057"
          >
            Anunciante
          </Text>
        </Stack>
      </CardBody>
      <CardFooter mt="-5">
        <Text
          fontFamily="Inter"
          fontWeight="500"
          fontSize="14px"
          color="#4529E6"
          background=" #EDEAFD"
          borderRadius="4px"
          width="3.125rem"
          height="1.25rem"
          textAlign="center"
        >
          0 KM
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight="500"
          fontSize="14px"
          color="#4529E6"
          background=" #EDEAFD"
          borderRadius="4px"
          width="3.125rem"
          height="1.25rem"
          textAlign="center"
          marginLeft="20px"
        >
          2019
        </Text>
        <Text
          fontFamily="Lexend"
          fontWeight="500"
          fontSize="16px"
          color="#212529"
          marginLeft="115px"
        >
          R$ 00.000,00
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

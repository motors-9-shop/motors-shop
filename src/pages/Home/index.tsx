import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import FilterBy from "../../components/FilterBy";
import Header from "../../components/Header";
import { IAd } from "../../interfaces";
import AdList from "../../components/AdList";
import { useEffect, useState } from "react";
import { getAllAd } from "../../services";
import Footer from "../../components/Footer";

const Home = () => {
  const [adCarList, setAdCarList] = useState<IAd[]>([]);
  const [adMotocycleList, setAdMotocycleList] = useState<IAd[]>([]);
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  useEffect(() => {
    (async function () {
      const ads = await getAllAd();
      if (ads) {
        setAdCarList(ads.sell.car);
        setAdMotocycleList(ads.sell.motocycle);
      }
    })();
  }, []);

  return (
    <Box>
      <Header />
      <FilterBy />
      <Box
        display="flex"
        p={isSmallerThan720 ? "32px 16px" : "32px 32px"}
        flexDir="column"
      >
        <AdList adList={adCarList} title="Carros" id="cars" />
        <AdList adList={adMotocycleList} title="Motos" id="motocycles" />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AdList from "../../components/AdList"
import AdvertiserDescription from "../../components/AdvertiserDescription"
import Header from "../../components/Header"
import { ProfileContext } from "../../contexts/profileContext"
import { UserContext } from "../../contexts/userContext"

const Profile = () => {
    const { userId } = useParams()
    const { profile, loadProfile, pageAdsList } = useContext(ProfileContext)
    const { user } = useContext(UserContext)

    useEffect(() => {loadProfile(userId!)}, [])

    const owner = user?.id === profile?.id

    return (
        <Box background="linear-gradient(180deg, var(--chakra-colors-brand-1) 31.25%, var(--chakra-colors-grey-8) 31.26%, var(--chakra-colors-grey-8) 100%);" minH="100vh">
            <Header />
            {profile &&
            <Flex
                width="90vw"
                flexDir="column"
                margin="0 auto"
                textStyle="heading-5-600"
            >
                <AdvertiserDescription name={profile.name} description={profile.description} owner={owner}/>
                <AdList adList={pageAdsList.filter(ad => ad.vehicle.type === "car" && ad.type === "sell")} title="Carros" badge={true}/>
                <AdList adList={pageAdsList.filter(ad => ad.vehicle.type === "motocycle" && ad.type === "sell")} title="Motos" badge={true}/>
            </Flex>
            }
        </Box>  
    )
}

export default Profile
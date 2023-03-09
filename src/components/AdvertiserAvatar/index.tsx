import { Avatar, Box, BoxProps, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { IUser } from "../../interfaces"

interface IAdvertiserAvatarProps extends BoxProps {
    user: IUser
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs" | undefined
}

const AdvertiserAvatar = ({user, size,...rest}: IAdvertiserAvatarProps) => {
    const navigate = useNavigate()

    return (
        <Box 
            color="grey.2" 
            textStyle="body-2-500" 
            display="flex" 
            gap="8px"
            onClick={() => navigate(`/profile/${user.id}`)}
            cursor="pointer" 
            {...rest}
        >
            <Avatar name={user.name} size={size ? size : "xs"}/>
            <Text>{user.name}</Text>
        </Box>
    )
}

export default AdvertiserAvatar
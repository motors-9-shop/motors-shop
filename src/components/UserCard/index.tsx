import { Box, BoxProps, Text } from "@chakra-ui/layout"
import { Avatar, forwardRef } from "@chakra-ui/react"

interface IUserCardProps extends BoxProps {
    ref?: React.Ref<HTMLDivElement>
    username: string
}

const UserCard = forwardRef<IUserCardProps, 'div'>((props, ref) => {
    const { username, ...rest } = props

    return (
        <Box
            display="flex"
            alignItems="center"
            gap="16px"
            ref={ref}
            {...rest}
            cursor="pointer"
        >
            <Avatar name={username} size="sm"/>
            <Text textStyle="body-1-400" color="grey.2">{username}</Text>
        </Box>
    )
})

export default UserCard
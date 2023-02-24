import { Box, BoxProps, Text } from "@chakra-ui/layout"
import { Avatar, forwardRef } from "@chakra-ui/react"

const UserCard = forwardRef<BoxProps, 'div'>((props, ref) => (
    <Box
        display="flex"
        alignItems="center"
        gap="16px"
        ref={ref}
        {...props}
        cursor="pointer"
    >
        <Avatar name="Wilson Mesquita" size="sm"/>
        <Text textStyle="body-1-400" color="grey.2">Wilson Mesquita</Text>
    </Box>
))

export default UserCard
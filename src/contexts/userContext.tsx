import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces";
import { getProfileByToken } from "../services";

interface IUserContextProps {
    user: IUser | null
    logout: () => void
}

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)

interface IUserProviderProps {
    children: ReactNode
}

const UserProvider = ({children}: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        (async function(){
            const newUser = await getProfileByToken()
            if(newUser)
            setUser(newUser)
        })()
    }, [])

    const logout = () => {
        localStorage.removeItem("@kenzie-motors:token")
        setUser(null)
        navigate("/", {replace: true})
    }

    return (
        <UserContext.Provider value={{user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAdValues } from "../components/CreateAdModal";
import { IAd, IUser } from "../interfaces";
import { createAd, getProfileByToken } from "../services";

interface IUserContextProps {
    user: IUser | null
    logout: () => void
    createUserAd: (data: CreateAdValues) => void
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

    const createUserAd = async (data: CreateAdValues) => {
        const newAd = await createAd(data)

        if(newAd){
            const newUser = {...user}
    
            newUser.ads?.push(newAd)
        }
    }

    const logout = () => {
        localStorage.removeItem("@kenzie-motors:token")
        setUser(null)
        navigate("/", {replace: true})
    }

    return (
        <UserContext.Provider value={{user, logout, createUserAd}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
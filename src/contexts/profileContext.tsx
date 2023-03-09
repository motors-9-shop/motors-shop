import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IAd, IUser } from "../interfaces";
import { createAd, deleteAd, getProfile, getProfileByToken } from "../services";
import { updateAd } from "../services";

export interface CreateAdValues {
    type: "sell" | "auction"
    price: number
    description: string,
    vehicle: {
        name: string
        km: number
        year: number
        type: "car" | "motocycle"
        bannerUrl: string
        images?: string[]
    }
}

export interface UpdateAdValues extends Partial<CreateAdValues> {}

interface IProfileContextProps {
    profileCreateAd: (data: CreateAdValues) => void
    loadProfile: (id: string) => void
    profile: IUser | null
    pageAdsList: IAd[]
    profileUpdateAd: (id: string, data: UpdateAdValues) => void
    profileDeleteAd: (id: string) => void
}

export const ProfileContext = createContext<IProfileContextProps>({} as IProfileContextProps)

interface IProfileProviderProps {
    children: ReactNode
}

const ProfileProvider = ({children}: IProfileProviderProps) => {
    const [pageAdsList, setPageAdsList] = useState<IAd[]>([])
    const [profile, setProfile] = useState<IUser | null>(null)
    const toast = useToast({colorScheme: "feedback", duration: 3000, position:"top-right"})

    const toastError = () => toast({
        title: 'Error',
        description: 'Ops, parece que algo deu errado',
        status: 'error',
        isClosable: true 
    })

    const loadProfile = async (id: string) => {
        const user = await getProfile(id)

        if(user){
            setProfile(user)
            setPageAdsList(user.ads)
        }
    }

    const profileCreateAd = async (data: CreateAdValues) => {
        const newAd = await createAd(data)

        if(newAd){
            setPageAdsList((oldList) => [...oldList, newAd])
            return toast({
                title: 'Anúncio criado',
                description: "Anúncio criado com sucesso!",
                status: 'success',
                isClosable: true,
            })
        }
        toastError()
    }

    const profileUpdateAd = async (id: string, data: UpdateAdValues) => {
        const adUpdated = await updateAd(id, data)

        if(adUpdated){
            setPageAdsList(oldList => oldList.map(elem => {
                if(elem.id === id){
                    return adUpdated
                }
                return elem
            }))
            return toast({
                title: 'Anúncio atualizado',
                description: "Anúncio atualizado com sucesso!",
                status: 'success',
                isClosable: true,
            })
        }
        toastError()
    }

    const profileDeleteAd = async (id: string) => {
        try {
            await deleteAd(id)
            setPageAdsList(oldList => oldList.filter(ad => ad.id !== id))
            return toast({
                title: 'Anúncio deletado',
                description: "Anúncio deletado com sucesso!",
                status: 'success',
                isClosable: true,
            })
        } catch (error) {
            console.error(error)
            toastError()   
        }
    }

    return (
        <ProfileContext.Provider value={{loadProfile, profileCreateAd, profileUpdateAd, profileDeleteAd, pageAdsList, profile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
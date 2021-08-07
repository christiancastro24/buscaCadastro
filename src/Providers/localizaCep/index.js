import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useFavorites } from "../favorites"
import { toast } from "react-toastify"

const LocalizaCepContext = createContext()

export const LocalizaCepProvider = ({ children }) => {
    const [ceps, setCeps] = useState(JSON.parse(localStorage.getItem("@BuscaCep/cep")) || [])
    const [error, setError] = useState(false)
    const [cepNumber, setCepNumber] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const { favorites, setFavorites } = useFavorites()

    const handleSearch = () => {
        setIsLoading(true)
        setCepNumber("")
        axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        
        .then(res => {
            setCeps([res.data])
            setIsLoading(false)
            setError(false)
        })
        .catch(_ => {
            setIsLoading(false)
            setError(true)
        })
    }

    const handleAdd = (newCep) => {
        const cepExist = favorites.find(fav => fav.cep === newCep.cep)
        
        if(cepExist) {
            toast.error('Este cep já esta nos seus favoritos')

        } else {
            setFavorites([...favorites, newCep])
            toast.success('Cep adicionado aos favoritos')
            localStorage.setItem("@BuscaCep/cep", JSON.stringify(favorites))
        }
    }

    return (
        <LocalizaCepContext.Provider value={{ceps, error, setCepNumber, isLoading, setIsLoading, cepNumber, handleSearch, handleAdd}}>
            {children}
        </LocalizaCepContext.Provider>
    )
}

export const useLocalizaCep = () => useContext(LocalizaCepContext)
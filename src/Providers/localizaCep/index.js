import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const LocalizaCepContext = createContext()

export const LocalizaCepProvider = ({ children }) => {
    const [ceps, setCeps] = useState([])
    const [error, setError] = useState(false)
    const [cepNumber, setCepNumber] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <LocalizaCepContext.Provider value={{}}>
            {children}
        </LocalizaCepContext.Provider>
    )
}

export const useLocalizaCep = () => useContext(LocalizaCepContext)
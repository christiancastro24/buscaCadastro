import { createContext, useContext, useEffect, useState } from "react"

const AutenticaoContext = createContext();

export const AutenticacaoProvider = ({ children }) => {

    const [autenticado, setAutenticado] = useState(false)


    useEffect(() => {
        const access = JSON.parse(localStorage.getItem("@BuscaCep/user"))

        if(access) {
            setAutenticado(true)
        }

    }, [autenticado])

    return (
        <AutenticaoContext.Provider value={{autenticado, setAutenticado}}>
            {children}
        </AutenticaoContext.Provider>
    )
}

export const useAutenticacao = () => useContext(AutenticaoContext)
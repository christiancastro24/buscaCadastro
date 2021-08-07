import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("@BuscaCep/cep")) || [])

    useEffect(() => {
        localStorage.setItem("@BuscaCep/cep", JSON.stringify(favorites))
    }, [favorites])

    const handleRemove = (trashItem) => {
        setFavorites(favorites.filter(fav => fav !== trashItem))
    }

    return (
        <FavoritesContext.Provider value={{favorites, handleRemove, setFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext)
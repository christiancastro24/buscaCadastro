import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"
import { ContainerHeader } from "./styles"
import { useAutenticacao } from "../../Providers/autenticacao"
import { useFavorites } from "../../Providers/favorites";

export const Header = () => {

    const history = useHistory()
    const { setAutenticado } = useAutenticacao()
    const { favorites } = useFavorites()

    const handleLogout = () => {
        setAutenticado(false)
        localStorage.removeItem("@BuscaCep/user")
        history.push("/")
    }

    return (
        <ContainerHeader>
            <Button style={{width: "7rem"}} variant="contained" color="secondary" onClick={() => history.push("/dashboard")}>Buscar</Button>

            <Button style={{width: "22rem"}} variant="contained" color="primary" onClick={() => history.push("/favorites")}>Favoritos <span style={{backgroundColor: "red", padding: "0.015rem 0.7rem", marginLeft: "0.2rem", borderRadius: "100%"}}>{favorites.length}</span></Button>
            
            <Button style={{backgroundColor: "orange", width: "10rem"}} variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
        </ContainerHeader>
    )
}
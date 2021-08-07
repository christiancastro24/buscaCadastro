import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import { ContainerHome } from "./styles";
// import FindInPageIcon from '@material-ui/icons/FindInPage';

export const Home = () => {

    const history = useHistory();

    return (
        <div>
            <ContainerHome >    
                <h1>BuscaCep</h1>
                <Button variant="contained" color="primary" onClick={() => history.push("/register")}>Cadastrar</Button>
                <Button variant="contained" color="secondary" onClick={() => history.push("/login")}>Login</Button>
            </ContainerHome>
        </div>
    )
}
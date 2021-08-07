import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import error from "../../assets/notFound.svg"
import { ContainerNotFound } from "./styles"

export const PageNotFound = () => {

    const history = useHistory()

    return (
        <ContainerNotFound>
            <img src={error} alt={error} />
            <div>
                <Button onClick={() => history.push("/")} variant="contained" color="primary">Início</Button>
            </div>
        </ContainerNotFound>
    )
}
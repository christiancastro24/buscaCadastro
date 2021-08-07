import { Header } from "../../components/Header"
import { useFavorites } from "../../Providers/favorites"
import { ContainerFavorites, ItemsFavorites } from "./styles";
import { Button } from "@material-ui/core";
import ApartmentIcon from '@material-ui/icons/Apartment';
import BallotIcon from '@material-ui/icons/Ballot';
import AppsIcon from '@material-ui/icons/Apps';

export const Favorites = () => {

    const { favorites, handleRemove } = useFavorites()

    return (
        <ContainerFavorites>
            <Header />
            {favorites.map(fav => {
                return (
                    <ItemsFavorites>
                        <h3><AppsIcon /> Cep: {fav.cep}</h3>
                        <h3><ApartmentIcon /> Logradouro:  {fav.logradouro?.slice(0, 13)+ "..."}</h3>
                        <h3><BallotIcon /> Bairro: {fav.bairro?.slice(0, 13)+ "..."}</h3>
                        <div>
                            <Button variant="contained" onClick={() => handleRemove(fav)}>Remover</Button>
                        </div>
                    </ItemsFavorites>
                )
            })}
        </ContainerFavorites>
    )
}
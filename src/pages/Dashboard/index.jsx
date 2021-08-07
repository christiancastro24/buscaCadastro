import AppsIcon from '@material-ui/icons/Apps';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import { useLocalizaCep } from "../../Providers/localizaCep"
import { ItemsDashboard, ContainerDashboard } from "./styles.js"
import { Button, TextField } from "@material-ui/core"
import { Header } from '../../components/Header';
import { useHistory } from 'react-router';
import { useAutenticacao } from '../../Providers/autenticacao';

export const Dashboard = () => {

    const { ceps, handleAdd, cepNumber, setCepNumber, handleSearch, error, isLoading } = useLocalizaCep()
    const { autenticado } = useAutenticacao()

    const history = useHistory()

    if(!autenticado) {
        history.push("/login")
    }

    return (
        <div>

            <Header />
        <ContainerDashboard>
            <h1>Busque seu cep</h1>

            <TextField 
              label="Digite seu cep" 
              variant="filled" 
              size="small" 
              value={cepNumber} 
              onChange={evt => setCepNumber(evt.target.value)} 
              />
            <button disabled={!cepNumber} onClick={() => handleSearch(cepNumber)} style={{margin: "0.4rem"}}><SearchIcon /></button>
            
            {error && <h4>Cep não encontrado</h4>}
            {isLoading && <h4>Carregando...</h4>}

            {ceps.map((cep, index) => {
                return (
                    <ItemsDashboard key={index}>
                        <h4><AppsIcon /> Cep: {cep.cep}</h4>
                        <h4><DashboardIcon /> Estado: {cep.uf}</h4>
                        <h4><LocationCityIcon /> Cidade: {cep.localidade}</h4>
                        <h4><BallotIcon /> Bairro: {cep.bairro}</h4>
                        <h4><ApartmentIcon /> Logradouro:  {cep.logradouro?.slice(0, 15)+ "..."}</h4>
                        <div>
                            <Button variant="contained" color="secondary" onClick={() => handleAdd(cep)}>Adicionar aos favoritos</Button>    
                        </div>   
                    </ItemsDashboard>
                )
            })}

            
        </ContainerDashboard>
    </div>
    )
}
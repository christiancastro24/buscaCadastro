import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import axios from "axios"
import { Button, TextField } from "@material-ui/core";
import { ContainerForm } from "./styles";
import { useHistory, Link } from "react-router-dom";
import { useAutenticacao } from "../../Providers/autenticacao";

export const Login = () => {
    
    const history = useHistory()
    const { autenticado, setAutenticado } = useAutenticacao()

    const formSchema = yup.object().shape({
        username: yup.string(),
        password: yup.string().min(8, "mínimo 8 dígitos")
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        axios.post("https://kenzieshop.herokuapp.com/sessions/", data)
        .then(res => {

            const { access } = res.data

            localStorage.setItem("@BuscaCep/user", JSON.stringify(access))

            setAutenticado(true)

            history.push("/dashboard")
        })
        .catch(_ => alert('Usuário ou senha inválidos'))
    }

    if(autenticado) {
        history.push("/dashboard")
    }


    return (
        <div>
            <ContainerForm onSubmit={handleSubmit(onSub)}>
                <h1>BuscaLogin</h1>
                <TextField 
                  required 
                  variant="outlined" 
                  size="medium" 
                  label="Usuário"
                  {...register("username")} 
                />

                <br /><br />

                <TextField 
                  required
                  type="password" 
                  variant="outlined" 
                  size="medium" 
                  label="Senha"
                  {...register("password")} 
                />
                <br /><br />

                <Button variant="contained" color="primary" type="submit">Entrar</Button>
                <p>Não possui conta? Faça seu <Link to={"/register"}>Cadastro</Link></p>
            </ContainerForm>
        </div>
    )
}
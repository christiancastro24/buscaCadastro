import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import axios from "axios"
import { Button, TextField } from "@material-ui/core";
import { ContainerForm } from "./styles";
import { useHistory, Link } from "react-router-dom";
import { useAutenticacao } from "../../Providers/autenticacao";

export const Register = () => {

    const { autenticado } = useAutenticacao()
    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        email: yup.string().email('E-mail inválido').required('Email obrigatório'),
        password: yup.string().min(8, 'Senha mínima de 8 digitos').required('Campo obrigatório')

    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        axios.post("https://kenzieshop.herokuapp.com/users/", data)
        .then(_ => {
            alert("Usuario cadastrado")
            history.push("/login")
        })
        .catch(_ => alert("Usuario ou e-mail já foram cadastrados"))
    }

    if(autenticado) {
        history.push("/dashboard")
    }

    return (
        <div>
            <ContainerForm onSubmit={handleSubmit(onSub)}>
            <h1>BusCadastro</h1>
                <TextField 
                  required 
                  type="email"
                  variant="outlined" 
                  size="medium" 
                  label="E-mail"
                  {...register("email")} 
                />
                <br />
                {errors.email && errors.email.message}
                <br />

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
                <br />
                {errors.password && errors.password.message}
                <br /><br />

                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
                <h4>Já possui uma conta?  <Link to={"/login"}> Entrar</Link></h4>
            <footer>
                <p>Seus endereços em um só lugar</p>
            </footer>
            </ContainerForm>
        </div>
    )
}
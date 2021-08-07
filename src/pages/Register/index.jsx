import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import axios from "axios"
import { Button, TextField } from "@material-ui/core";
import { ContainerForm, Image } from "./styles";
import { useHistory, Link } from "react-router-dom";
import { useAutenticacao } from "../../Providers/autenticacao";
import { useLocalizaCep } from "../../Providers/localizaCep"
import { toast } from "react-toastify"
import registerImg from "../../assets/register.svg"

export const Register = () => {

    const { autenticado } = useAutenticacao()
    const { isLoading, setIsLoading } = useLocalizaCep()
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
        setIsLoading(true)
        axios.post("https://kenzieshop.herokuapp.com/users/", data)
        .then(_ => {
            setIsLoading(false)
            toast.success("Usuario cadastrado")
            history.push("/login")
        })
        .catch(_ => {
            setIsLoading(false)
            toast.error("Usuario ou e-mail já foram cadastrados")
        })
    }

    if(autenticado) {
        history.push("/dashboard")
    }

    return (
        <div>
            <ContainerForm onSubmit={handleSubmit(onSub)}>
              <Image>
                <img src={registerImg} alt={registerImg} />
              </Image>
              <div>
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

                {isLoading && <h5>Carregando...</h5>}
                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
                <h4>Já possui uma conta?  <Link to={"/login"}> Entrar</Link></h4>
            </div>
            </ContainerForm>
        </div>
    )
}
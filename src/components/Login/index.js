import axios from "axios";
import {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";

import UserContext from "../../Contexts/UserContext.js";
import {ContanierForm, StyledLink, Title} from './style';
import Button from "../Utils/Button/Button.js";
import Input from "../Utils/Input/Input.js";

import SingUp from "../SingUp/index.js";

function Login(){
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
       /* e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:4000/Login", {email, password});
            setUser(data);*/
            navigate("/");
        /*}catch(error){
            console.log("Erro ao fazer login");
        }*/
    }

    return (
        <div className="login">
                    <Title> Adventure's Store </Title>
                    <ContanierForm onSubmit={handleSubmit}>
                        <form onSubmit={SingUp}>
                            <Input 
                            type='email' 
                            placeholder="Email" 
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            />
                            <Input 
                            type='password' 
                            placeholder="password" 
                            onChange={(e)=> setPassword(e.target.value)} 
                            required
                            />
                            <Button type="submit" onClick={handleSubmit}>Entrar</Button>
                        </form>
                        <StyledLink to="/SingUp"> Não tem uma conta? cadastre-se!</StyledLink>
                    </ContanierForm>
        </div>
    )
}

export default Login;
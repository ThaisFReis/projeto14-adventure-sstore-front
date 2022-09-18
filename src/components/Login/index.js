import React, {useState, useContext} from 'react'
import { AuthContext } from "../Contexts/auth"

import {ContanierForm, StyledLink, Title} from './style';
import Button from "../Utils/Button/Button.js";
import Input from '../Utils/Input/Input';


const Login = () => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        login(email, password); // this is the login function from the context
    }

    return (
        <div className="login">
                    <Title> Adventure's Store </Title>
                    <ContanierForm onSubmit={handleSubmit}>
                        <form className='form' onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="password">Senha</label>
                                <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className='actions'>
                                <Button type='submit'>Entrar</Button>
                                <StyledLink to="/SingUp"> Não tem uma conta? cadastre-se!</StyledLink>
                                <StyledLink to="/"> Voltar para página principal</StyledLink>
                            </div>
                        </form>

                    </ContanierForm>


        </div>
    )
}

export default Login;
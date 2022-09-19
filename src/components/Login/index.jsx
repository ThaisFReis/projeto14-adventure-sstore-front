import React, {useState, useContext} from 'react'
import { AuthContext } from "../Contexts/auth"

import {LoginPage, ContanierForm, StyledLink, Title, StyledLink2, Input} from './style';
import Button from "../Utils/Button/Button.js";


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
        <LoginPage>
            <div className="login">
                <Title> Faça seu login </Title>
                    <ContanierForm onSubmit={handleSubmit}>
                        <form className='form' onSubmit={handleSubmit}>
                                <div>
                                <label htmlFor="email">Email</label>
                                <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                <label htmlFor="password">Senha</label>
                                <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            <div className='actions'>
                                <Button type='submit'>Entrar</Button>                                    
                                <StyledLink to="/SingUp"> Não tem uma conta? cadastre-se!</StyledLink>
                                <StyledLink2 to="/"> Voltar para página principal</StyledLink2>
                            </div>
                        </form>
                    </ContanierForm>
            </div>
        </LoginPage>
    )
}

export default Login;
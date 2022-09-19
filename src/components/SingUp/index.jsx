import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {SingUpPage, ContanierForm, StyledLink, Title, Input} from './style';
import Button from "../Utils/Button/Button.js";

function SingUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const body = { name, email, password, confirmPassword };
        try {
          await axios.post('http://localhost:5000/signup', body);
          navigate("/login");
    
          navigator('/');
        } catch (error) {
            alert("Erro ao cadastrar");          
            console.error('Deu erro ao cadastrar o usuario');
        }
      }
    return (
        <SingUpPage>
            <div className="singup">
                <Title> Faça seu cadastro </Title>
                    <ContanierForm onSubmit={handleSubmit}>
                        <form className='form' onSubmit={handleSubmit}>
                                <div>
                                <label htmlFor="name">Nome</label>
                                <Input type="name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div>
                                <label htmlFor="email">Email</label>
                                <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                <label htmlFor="password">Senha</label>
                                <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            <div className='actions'>
                                <Button type='submit'>Finalizar</Button>                                    
                                <StyledLink to="/login"> Já possui uma conta? Faça login </StyledLink>
                            </div>
                        </form>
                    </ContanierForm>
            </div>
        </SingUpPage>
    )
}

export default SingUp;

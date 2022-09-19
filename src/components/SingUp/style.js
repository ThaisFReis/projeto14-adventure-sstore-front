import styled from "styled-components"
import {Link} from 'react-router-dom'

const SingUpPage = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Recursive', sans-serif;
    font-family: 'Righteous', cursive;
    font-family: 'Viga', sans-serif;

    background-color: rgb(48, 48, 48);

    flex-grow: 1;
    overflow: auto;
`

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0 50px 0

`

const ContanierForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  label{
    color: #fff;
    font-size: 20px;
  }
  
  button{
    background-color: #000;
  }
`
const Input = styled.input`
  height: 45px;
  width: 300px;
  border: 1px solid #D4D4D4;
  background-color: #FFFFFF;
  color: #222222;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  margin-bottom: 6px;
  border-radius: 4px;
  ::placeholder {
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
  }
`;


const StyledLink = styled(Link)`
  margin: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 17px;
  text-decoration: none;
`;

export{
    SingUpPage,
    ContanierForm,
    StyledLink,
    Title,
    Input,
}
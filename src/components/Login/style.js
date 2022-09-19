import styled from "styled-components"
import {Link} from 'react-router-dom'

const LoginPage = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Recursive', sans-serif;
    font-family: 'Righteous', cursive;
    font-family: 'Viga', sans-serif;

    background-color: #040404;
`

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin: 50% 0 50px 0;

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

const StyledLink2 = styled(Link)`
  margin: 5px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(223, 223, 223);
  font-size: 14px;
  text-decoration: none;
`;


export{
    LoginPage,
    ContanierForm,
    StyledLink,
    Title,
    Input,
    StyledLink2
}
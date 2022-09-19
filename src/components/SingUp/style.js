import styled from "styled-components"
import {Link} from 'react-router-dom'

const SingUpPage = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;

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
  margin-bottom: 10px;
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
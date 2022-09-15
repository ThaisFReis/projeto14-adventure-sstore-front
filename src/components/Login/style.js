import styled from "styled-components"
import {Link} from 'react-router-dom'

const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  font-weight: 700;
  text-align: center;
  margin: 100px 0 100px 0

`

const ContanierForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input{
    background-color: #fff;
    border: 1px solid #000;
  }
  
  input::placeholder{
    color: #000;
  }
  button{
    background-color: #000;
  }
`

const StyledLink = styled(Link)`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
`;

export{
    ContanierForm,
    StyledLink,
    Title
}
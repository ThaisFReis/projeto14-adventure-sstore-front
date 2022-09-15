import { useNavigate } from "react-router-dom";

function SingUp(){
    const navigate = useNavigate();

    async function handleSubmit(e){
        /* e.preventDefault();
         try{
             const {data} = await axios.post("http://localhost:4000/Login", {email, password});
             setUser(data);*/
             navigate("/Login");
         /*}catch(error){
             console.log("Erro ao fazer login");
         }*/
     }
    return (
        <button onClick={handleSubmit}>voltar</button>
    )
}

export default SingUp;
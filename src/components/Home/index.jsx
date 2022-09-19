import "./style.css"
import Header from "../Utils/Header/Header"
import Categories from "../Categories/index"

function Home(){
    return (
        <>  
                <div className="home">
                    <Categories />
                    <div className="title"> Bem vindo <br/> a <br/> Adventurer's Shop </div>
                    <div className="subtitle"> Aqui você encontra tudo que precisa para sua aventura </div>
                </div>
        </>
    )
}

export default Home;
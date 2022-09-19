import "./style.css"
import Header from "../Utils/Header/Header"
import Categories from "./Categories"
import MainContent from "./MainContent"

function Home(){
    return (
        <div className="home">  
                <Header />
                <Categories />
                <MainContent />
        </div>
    )
}

export default Home;
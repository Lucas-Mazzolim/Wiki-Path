import Header from "../Universal Components/Header";
import NodeSide from './NodeSide'
import SearchSide from './SearchSide'
import '../../Styles/Home.css'

export default function Home(){
    return(
        <div className = "Home">
            <Header PageURL = {"/About"} PageName = {"About"} />
                <main className = "Home-Main">
                    <div className = "Home-SearchSide">
                        <SearchSide/>   
                    </div>
                    <div className = "Home-NodeSide">
                        {/* Nodes que farão o caminho entre a página de partida e a página de chegada */}
                        <NodeSide/>
                    </div>
                </main>
        </div>
    )
}
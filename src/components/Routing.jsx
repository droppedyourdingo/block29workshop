import {Routes, Route} from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from './NewPlayerForm';

export default function Routing() {

    return(
        <div id="main-section">
           
            <Routes>
                <Route path='/' element={<AllPlayers/>} />
                <Route path='/players/:id' element={<SinglePlayer/>}/>
                <Route path="/new-player" element={<NewPlayerForm/>} />
            </Routes>
            
        </div>
    )
}
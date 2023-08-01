import { fetchPlayers } from "../API/ajaxHelpers"
import {useState, useEffect } from "react"


export default function AllPlayers() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const playerData = await fetchPlayers();
                 
                setPlayers(playerData);
            }

            catch(err) {
                console.error('Uh oh, trouble fetching players!', err)
            }

            
        };

        fetchData();

    },[])



    return(
        <div>
            <h1>All Players</h1>
            <ul>
            {players.map((player) => (
                
                <li key={player.id}>{player.name}</li>

            ))}
            </ul>
        </div>
    )
}
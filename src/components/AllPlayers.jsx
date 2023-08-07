import { fetchPlayers } from "../API/ajaxHelpers";
import {useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";


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
        <table>
        <thead>
          <tr>
            <th colSpan="3">Players</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Picture</td>
            <td>Breed</td>
          </tr>
          {players.map((player) => {

              return <PlayerRow key={player.id} player={player} />;
              
            })}
        </tbody>
      </table>
    )
}
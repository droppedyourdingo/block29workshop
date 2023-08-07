import { fetchPlayers } from "../API/ajaxHelpers";
import {useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";
import SearchBar from './SearchBar';


export default function AllPlayers() {

    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const playerData = await fetchPlayers();
                 
                setPlayers(playerData);
                setFilteredPlayers(playerData);
            }

            catch(err) {
                console.error('Uh oh, trouble fetching players!', err)
            }

            
        };

        fetchData();

    },[])

    const handleSearch = (query) => {
        const filtered = players.filter((player) =>
          player.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPlayers(filtered);
      };

    return(
        <table>
        <thead>
          <tr>
            <th colSpan="3">Players</th>
            <SearchBar onSearch={handleSearch} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Picture</td>
            <td>Breed</td>
          </tr>
          {filteredPlayers.map((player) => {

            return <PlayerRow key={player.id} player={player} />;

            })}
        </tbody>
      </table>
    )
}
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function PlayerRow({player}) {
    const navigate = useNavigate();

    const viewPlayer = () => {
        
        navigate(`/players/${player.id}`);
    };

    return (
        <tr className="playerCard">
          <td>{player.name}</td>
          <td><img className="images" src={player.imageUrl} alt={`${player.name} Image`} /></td>
          <td>{player.breed}</td>
          <button onClick={viewPlayer}>View Details</button>
        </tr>
      );
}
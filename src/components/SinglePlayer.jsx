import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayerById, deletePlayer } from "../API/ajaxHelpers"; 

export default function SinglePlayer() {

    const { id } = useParams(); 
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);

    useEffect(() => {

        const fetchSinglePlayer = async () => {
            try {

                const playerData = await fetchPlayerById(id);

                setPlayer(playerData);
                
            } catch (err) {

                console.error("Error fetching single player!", err);

            }
        };

        fetchSinglePlayer();
    }, [id]);

    const handleDelete = async () => {

        try {

          await deletePlayer(id);
          console.log('Player deleted:', id);
          navigate('/'); 

        } catch (error) {

          console.error('Error deleting player:', error);

        }
      };

    return (
        <div className="pDetails">
        {player ? (
            <>
                <h1>{player.name}</h1>
                <img src={player.imageUrl} alt={`${player.name} Image`} />
                <p>Breed: {player.breed}</p>
                <p>Team ID: {player.teamId}</p>
                <p>Status: {player.status}</p>
                <button onClick={handleDelete}>Delete Player</button>
            </>
        ) : (
            <p>No player chosen, please return to the home page</p>
        )}
    </div>
    );

}
const API = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B`


export async function fetchPlayers () {
        try {
            const response = await fetch(`${API}/players/`,{
                method: 'GET',
                headers: { "Content-Type": "application/json"},
                
            });
            const result = await response.json();
            
            

            return result.data.players;
            
        } catch (err) {
            console.error('Uh oh, trouble fetching players!', err);
        }
    }

export async function fetchPlayerById(id) {

    try {
        const response = await fetch(`${API}/players/${id}`,{
            method: 'GET',
            headers: { "Content-Type": "application/json"},
            
        })

        const result = await response.json()
        
    return result.data.player;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }

    }

export async function createPlayer(newPlayerData) {

    try {

        const response = await fetch(`${API}/players`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(newPlayerData),

        });
      
          const createdPlayer = await response.json();

          return createdPlayer;

        } catch (err) {

          console.error('Uh oh, trouble creating player!', err);
          throw err;
        }
      }

export async function deletePlayer(playerId) {

    try {
        
        const response = await fetch(`${API}/players/${playerId}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
        });
      
        response.deleted()

        } catch (err) {
          console.error('Error deleting player:', err);
        }
      }
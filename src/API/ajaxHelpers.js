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

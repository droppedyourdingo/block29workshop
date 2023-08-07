import { useState } from 'react';
import { createPlayer } from '../API/ajaxHelpers';

export default function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayerData = {
      name,
      breed,
      imageUrl,
      status,
    };

    try {

      const createdPlayer = await createPlayer(newPlayerData);

      console.log('New player created:', createdPlayer);
    
    } catch (err) {
      console.error('Error creating player:', err);
    }
  };

  return (
    <div className='newPlayerDetails'>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Image URL:</label>
        <input type="img" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <label>Breed:</label>
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}
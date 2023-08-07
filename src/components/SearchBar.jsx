import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search players..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
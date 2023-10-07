import React, { useState } from 'react';
import './searchBar.css'; 

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleChange}
        className="search-input" // Add a class for custom styling
      />
    </div>
  );
}

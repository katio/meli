import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/items?search=${trimmedQuery}`);
    }
  };

  return (
    <form className="searchbar" onSubmit={handleSearchSubmit}>
      <input
        className='searchbar__inputbox'
        value={searchQuery}
        onChange={handleSearchChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;


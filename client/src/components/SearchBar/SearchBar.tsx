import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';

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
    <form className={styles.searchbar} onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchbar__inputbox}
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Nunca dejes de buscar"
      ></input>
      <button type="submit" className={styles.searchbar__button}>
      </button>
    </form>
  );
};

export default SearchBar;


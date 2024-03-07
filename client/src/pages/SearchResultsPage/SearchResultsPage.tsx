import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchSearchResults from '../../services/fetchSearchResults';
import styles from './SearchResultsPage.module.scss';


const useQuerySearch = () => new URLSearchParams(useLocation().search);

const SearchResultsPage = () => {

  const query = useQuerySearch();
  const searchQuery = query.get('search') || '';

  const { isLoading, error, data } = useQuery(['searchResults', searchQuery], () => fetchSearchResults(searchQuery), {
    enabled: !!searchQuery,
  });

  if (isLoading) return <div>Loading results...</div>;

  if (error) return <div>Error loading the results</div>;

  return (
    <div className={styles.searchResultsPage}>
      {data?.items.map((item: any) => (
        <div key={item.id} className={styles.itemCard}>
          <div className={styles.itemImageContainer}>
            <img src={item.picture} alt={item.title} className={styles.itemImage} />
          </div>
          <div className={styles.itemDetails}>
            <span className={styles.itemPrice}>${item.price.amount.toLocaleString()}</span>
            <span className={styles.itemTitle}>{item.title}</span>
          </div>
          <div className={styles.itemLocation}>{item.location || 'Capital Federal'}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;

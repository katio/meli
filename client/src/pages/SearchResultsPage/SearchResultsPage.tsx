import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchSearchResults from '../../services/fetchSearchResults';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './SearchResultsPage.module.scss';


const useQuerySearch = () => new URLSearchParams(useLocation().search);

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const query = useQuerySearch();
  const searchQuery = query.get('search') || '';

  const { isLoading, error, data } = useQuery(['searchResults', searchQuery], () => fetchSearchResults(searchQuery), {
    enabled: !!searchQuery,
  });
  const breadcrumpsList = (data?.categories || []).slice(0,3);
  const handleClick = (id: string) => {
    navigate(`/items/${id}`);
  };

  if (isLoading) return <div>Cargando resultados...</div>;

  if (error) return <div>Error cargando resultados</div>;

  return (
    <div className={styles.searchResultsPage}>
      <Breadcrumbs list={breadcrumpsList} />
      {data?.items.map((item: any) => ( // TODO: remove any
        <div key={item.id} className={styles.itemCard} onClick={() => handleClick(item.id)}>
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

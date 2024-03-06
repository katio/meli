import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchSearchResults from '../../services/fetchSearchResults';
import './SearchResultsPage.css';

const useQuerySearch = () =>  new URLSearchParams(useLocation().search);


const SearchResultsPage = () => {
  const query = useQuerySearch();
  const searchQuery = query.get('search') || '';
  const { isLoading, error, data } = useQuery(['searchResults', searchQuery], () => fetchSearchResults(searchQuery), {
    enabled: !!searchQuery,
  });

  if (isLoading) return <div>Cargando resultados...</div>;
  if (error) return <div>Error al cargar los resultados</div>;

  return (
    <div className="searchresultspage">
      {data?.items.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};


export default SearchResultsPage;

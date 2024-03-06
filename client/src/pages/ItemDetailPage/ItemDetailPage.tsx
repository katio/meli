import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchItemDetails from '../../services/fetchItemDetails';

import './ItemDetailPage.css';

const ItemDetailPage = () => {
  const { id } = useParams<{id: string}>();

  const { isLoading, error, data } = useQuery(['itemDetails', id], () => fetchItemDetails(id!), {
    enabled: !!id,
  });

  if (isLoading) return <div>Cargando detalles del item...</div>;
  if (error) return <div>Error al cargar los detalles</div>;

  return (
    <div className="itemdetailpage">
      {data && <div>{data?.item?.title || ''}</div>}
    </div>
  );
};


export default ItemDetailPage;

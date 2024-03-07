import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchItemDetails from '../../services/fetchItemDetails';
import styles from './ItemDetailPage.module.scss';

const ItemDetailPage = () => {
  const { id = ''} = useParams();
  const { isLoading, error, data } = useQuery(['itemDetails', id], () => fetchItemDetails(id), {
    enabled: !!id,
  });

  if (isLoading) return <div>Cargando detalles del item...</div>;
  if (error) return <div>Error al cargar los detalles del item</div>;

  return (
    <div className={styles.itemDetailPage}>
      <div className={styles.itemDetail}>
        <img src={data.item.picture} alt={data.item.title} className={styles.itemImage} />
        <div className={styles.itemInfo}>
          <h1 className={styles.itemTitle}>{data.item.title}</h1>
          <div className={styles.itemPrice}>${data.item.price.amount.toLocaleString()}</div>
          {data.item.free_shipping && <div className={styles.freeShipping}>Envío Gratis</div>}
          <p className={styles.itemDescription}>{data.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;

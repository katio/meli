import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import fetchItemDetails from '../../services/fetchItemDetails';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './ItemDetailPage.module.scss';

const ItemDetailPage = () => {
  const { id = '' } = useParams<{ id: string }>();
  const { isLoading, error, data } = useQuery(['itemDetails', id], () => fetchItemDetails(id), {
    enabled: !!id,
  });
  if (isLoading) return <div>Cargando detalles del item...</div>;
  if (error) return <div>Error al cargar los detalles del item</div>;
  const breadcrumpsList = [data?.item?.title, data?.item?.id];
  return (
    <div className={styles.itemDetailPage}>
      <Breadcrumbs list={breadcrumpsList} />
      <div className={styles.itemDetailContainer}>
        <div className={styles.itemImageContainer}>
          <img src={data?.item?.picture} alt={data?.item?.title} className={styles.itemImage} />
        </div>
        <div className={styles.itemInfoContainer}>
          <span className={styles.itemConditionNew}>Nuevo - {data?.item?.sold_quantity} vendidos</span>
          <h1 className={styles.itemTitle}>{data?.item?.title}</h1>
          <div className={styles.itemPrice}>${data?.item?.price?.amount.toLocaleString()}</div>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </div>
      <div className={styles.itemDescriptionContainer}>
        <h2 className={styles.descriptionTitle}>Descripción del Producto</h2>
        <p className={styles.itemDescription}>{data?.item?.description}</p>
      </div>
    </div>
  );
};

export default ItemDetailPage;

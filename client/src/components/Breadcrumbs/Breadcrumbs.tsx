import React from 'react';
import styles from './Breadcrumbs.module.scss';

type BreadcrumbsProps = {
  list: string[];
}

const Breadcrumbs = ({list = []}: BreadcrumbsProps) => {


  return (
    <span className={styles.breadcrumbs}>
      {list.join(' > ')}
    </span>
  );
};

export default Breadcrumbs;


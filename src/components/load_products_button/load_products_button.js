import { useState } from 'react';

import styles from './load_products_button.module.css';
import { fetchProducts } from '../../services/products';

function LoadProductsButton(props) {
  const { onLoadProducts } = props;
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  async function handleClick() {
    if (status === 'loading') {
      return;
    }

    const nextPage = page + 1;

    setStatus('loading');

    const products = await fetchProducts({
      page: nextPage,
    });

    setStatus('success');
    setPage(nextPage);

    onLoadProducts(products);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {status === 'loading' ? 'Loading Products...' : 'Load More Products'}
    </button>
  );
}

export { LoadProductsButton };

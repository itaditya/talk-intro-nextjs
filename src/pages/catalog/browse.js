import { useState } from 'react';

import { NavBar } from '../../components/nav_bar/nav_bar';
import { ProductsGrid } from '../../components/products_grid/products_grid';
import { LoadProductsButton } from '../../components/load_products_button/load_products_button';
import { fetchProducts } from '../../services/products';

function Browse(props) {
  const { initialProducts } = props;
  const [products, setProducts] = useState(initialProducts);

  function handleLoadProducts(newProducts) {
    setProducts((oldProducts) => {
      return [...oldProducts, ...newProducts];
    });
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1>Browse</h1>
        <ProductsGrid products={products} />
        <br />
        <LoadProductsButton onLoadProducts={handleLoadProducts} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const initialProducts = await fetchProducts();

  return {
    props: {
      initialProducts,
    },
  };
}

export default Browse;

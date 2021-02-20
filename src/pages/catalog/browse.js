import { NavBar } from '../../components/nav_bar/nav_bar';
import { ProductsGrid } from '../../components/products_grid/products_grid';
import { fetchProducts } from '../../services/products';

function Browse(props) {
  const { products } = props;

  return (
    <div>
      <NavBar />
      <div>
        <h1>Browse</h1>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
}

export default Browse;

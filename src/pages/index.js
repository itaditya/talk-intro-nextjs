import { NavBar } from '../components/nav_bar/nav_bar';
import { ProductsGrid } from '../components/products_grid/products_grid';
import { fetchRecommendedProducts } from '../services/products';

function Home(props) {
  const { products } = props;

  return (
    <div>
      <NavBar />
      <div>
        <h1>Home</h1>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await fetchRecommendedProducts();

  return {
    props: {
      products,
    },
  };
}

export default Home;

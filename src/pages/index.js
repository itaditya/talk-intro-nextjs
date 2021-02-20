import { NavBar } from '../components/nav_bar/nav_bar';
import { ProductsGrid } from '../components/products_grid/products_grid';

const products = [
  {
    id: 'cupiditate-qui-et',
    name: 'Sleek Soft Table',
    price: '809.00',
    imageUrl: 'http://placeimg.com/640/480/technics?id=78896',
  },
  {
    id: 'in-id-aliquid',
    name: 'Fantastic Granite Gloves',
    price: '952.00',
    imageUrl: 'http://placeimg.com/640/480/technics?id=29157',
  },
];

function Home() {
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

export default Home;

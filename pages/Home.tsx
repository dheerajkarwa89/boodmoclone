import Header from '../components/Header';
import CarSelector from '../components/CarSelector';
import ProductGrid from '../components/ProductGrid';
const Home = () => (
  <>
    <Header />
    <main className="container my-4">
      <CarSelector />
      <ProductGrid />
    </main>
  </>
);
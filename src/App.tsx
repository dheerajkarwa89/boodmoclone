import React from 'react';
import Header from './components/Header';
import CarSelector from './components/CarSelector';
import ProductGrid from './components/ProductGrid';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import { useState } from 'react';

function App() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  return (
  <>
      <Header setSearchQuery={setSearchQuery} />
      <div className="container">
        <CarSelector />
        <div className="row">
          <div className="col-md-3">
            <FilterSidebar
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <div className="col-md-9">
            <ProductGrid
              selectedBrands={selectedBrands}
              selectedPrice={selectedPrice}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
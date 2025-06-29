import ProductCard from './ProductCard';
import React from 'react';

interface ProductGridProps {
  selectedBrands: string[];
  selectedPrice: string;
  searchQuery: string;
}

const sample = [
  {
    title: 'Air Filter - Bosch',
    image: '/images/y.png',
    price: '₹599',
  },
  {
    title: 'Engine Oil - Castrol 5W-30',
    image: '/images/y.png',
    price: '₹999',
  },
  {
    title: 'Brake Pad Set - TVS',
    image: '/images/y.png',
    price: '₹1,200',
  },
  {
    title: 'Spark Plug - Bosch',
    image: '/images/y.png',
    price: '₹350',
  },
  {
    title: 'Wiper Blade - Mahle',
    image: '/images/y.png',
    price: '₹450',
  },
  {
    title: 'Car Battery - Amaron',
    image: '/images/y.png',
    price: '₹4,000',
  },
  {
    title: 'Clutch Plate - TVS',
    image: '/images/y.png',
    price: '₹2,000',
  },
  {
    title: 'Radiator - Mahle Hyundai i20',
    image: '/images/y.png',
    price: '₹3,000',
  },
  {
    title: 'Fuel Pump - Bosch Honda City',
    image: '/images/y.png',
    price: '₹2,500',
  },
  {
    title: 'Cabin Filter - Castrol',
    image: '/images/y.png',
    price: '₹299',
  },
];


const ProductGrid: React.FC<ProductGridProps> = ({ selectedBrands, selectedPrice, searchQuery }) => {
  const filterProducts = sample.filter((p) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.some(b => p.title.toLowerCase().includes(b.toLowerCase()));
    const priceValue = parseInt(p.price.replace(/[₹,]/g, ''));
    let priceMatch = true;
    if (selectedPrice === '0-500') priceMatch = priceValue <= 500;
    else if (selectedPrice === '500-1000') priceMatch = priceValue > 500 && priceValue <= 1000;
    else if (selectedPrice === '1000-2000') priceMatch = priceValue > 1000 && priceValue <= 2000;
    else if (selectedPrice === '2000+') priceMatch = priceValue > 2000;

    const queryMatch = searchQuery
      ? p.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return brandMatch && priceMatch && queryMatch;
  });

  return (
    <div className="container my-4">
      <h5>Filtered Spare Parts</h5>
      <div className="row">
        {filterProducts.length === 0 ? (
          <p>No products match your filters.</p>
        ) : (
          filterProducts.map((product, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
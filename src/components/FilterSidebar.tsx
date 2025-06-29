import React, { useState } from 'react';

interface FilterSidebarProps {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedPrice: string;
  setSelectedPrice: (price: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedBrands,
  setSelectedBrands,
  selectedPrice,
  setSelectedPrice,
}) => {
  const brands = ['Bosch', 'Castrol', 'Mobil', 'Mahle', 'TVS'];
  const priceRanges = [
    { label: 'Under ₹500', value: '0-500' },
    { label: '₹500 - ₹1000', value: '500-1000' },
    { label: '₹1000 - ₹2000', value: '1000-2000' },
    { label: 'Above ₹2000', value: '2000+' },
  ];

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="bg-light p-3 rounded shadow-sm mb-4">
      <h6>Filter By</h6>

      {/* Brand Filters */}
      <div className="mb-4">
        <h6 className="text-muted">Brand</h6>
        {brands.map((brand) => (
          <div key={brand} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`brand-${brand}`}
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <label className="form-check-label" htmlFor={`brand-${brand}`}>
              {brand}
            </label>
          </div>
        ))}
      </div>

      {/* Price Range Filters */}
      <div>
        <h6 className="text-muted">Price Range</h6>
        {priceRanges.map((range) => (
          <div key={range.value} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`price-${range.value}`}
              name="price"
              checked={selectedPrice === range.value}
              onChange={() => setSelectedPrice(range.value)}
            />
            <label className="form-check-label" htmlFor={`price-${range.value}`}>
              {range.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
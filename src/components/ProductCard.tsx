import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ objectFit: 'contain', height: '180px' }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{title}</h6>
        <p className="mt-auto font-weight-bold text-primary">{price}</p>
        <button className="btn btn-outline-primary btn-sm mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
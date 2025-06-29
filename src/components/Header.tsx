import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import React from 'react';

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  return (
    <header className="d-flex align-items-center p-3 bg-primary text-white shadow">
      <img src="/logo192.png" alt="logo" style={{ width: '50px', marginRight: '20px' }} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light mx-2">Products</button>
        <button className="btn btn-outline-light">Cart</button>
      </div>
    </header>
  );
};

export default Header;
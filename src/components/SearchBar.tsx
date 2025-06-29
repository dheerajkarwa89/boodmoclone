import React, { useState } from 'react';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query.trim().toLowerCase());
  };

  const handleClear = () => {
    setQuery('');
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="input-group w-50 position-relative">
      <input
        type="text"
        className="form-control"
        placeholder="Search by part or number plate"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Clear button only shows when text is present */}
      {query && (
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary position-absolute"
          style={{ right: '85px', top: '5px' }}
          onClick={handleClear}
        >
          ✖
        </button>
      )}

      <div className="input-group-append">
        <button className="btn btn-light" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

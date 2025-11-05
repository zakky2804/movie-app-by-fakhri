"use client";

import { useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = searchInput.current?.value.trim();
    if (query) onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="max-w-sm mb-12 flex focus-within:ring-2 focus-within:ring-primary/40 rounded-full transition">
      <input
        type="text"
        placeholder="Search Movie..."
        className="w-full px-6 py-3 rounded-l-full bg-secondary text-sm font-Outfit focus:outline-none"
        ref={searchInput}
        onKeyDown={handleKeyDown}
      />
      <button
        className="cta-button rounded-r-full bg-primary/90 px-6 py-2 text-sm transition duration-200 hover:bg-primary active:bg-primary active:scale-95"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

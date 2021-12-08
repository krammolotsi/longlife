import React from 'react';
import { useState } from 'react';
function SearchForm() {
  const [search, setSearch] = useState('');
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSearch} method="POST">
      <div className="relative">
        <div className="w-4 absolute top-2 left-3 text-blue-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-light rounded-md h-10 pl-10 text-gray-dark outline-none focus:ring-2 focus:ring-offset-blue-light"
          onChange={({ target }) => setSearch(target.value)}
          value={search}
        />
      </div>
    </form>
  );
}

export default SearchForm;

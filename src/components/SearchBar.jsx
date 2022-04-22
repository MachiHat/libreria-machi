import React from "react";

export const SearchBar = ({ startSearch, setSearchParams }) => {
  return (
    <form onSubmit={startSearch} className="form-control">
      <div className="input-group flex justify-center my-2">
        <input
          onChange={(e) => setSearchParams(e.target.value)}
          type="text"
          placeholder="Buscar..."
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button type="submit" className="btn btn-square btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

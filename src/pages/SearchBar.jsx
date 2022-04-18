import React from "react";
import { Link } from "react-router-dom";

export const SearchBar = ( content, setSearchParams ) => {
  return (
    <div>
      <input
        onChange={(e) => setSearchParams(e.target.value)}
        type="text"
        placeholder="El increíble buscador de libros"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <Link to={'/lib'}>Buscar</Link>
    </div>
  );
};

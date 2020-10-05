import React, { useState } from "react";
import { useLocation } from "wouter";

export default function SearchForm() {
  const [keyword, updateKeyword] = useState([]);
  const [, setLocation] = useLocation([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation("/search/" + keyword);
    e.target.reset();
    e.target.inputSearch.blur();
  };

  const handleInput = (e) => {
    updateKeyword(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        id="inputSearch"
        name="inputSearch"
        type="text"
        placeholder="Buscar gif..."
      />
      <button>
        <span className="material-icons">search</span>
      </button>
    </form>
  );
}

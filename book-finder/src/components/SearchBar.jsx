import React from "react";

const  SearchBar = ({ searchTerm, setSearchTerm, searchType, setSearchType }) => {
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Searching for books..."
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">By name</option>
          <option value="author">By author</option>
          <option value="subject">By topic</option>
        </select>
      </div>
    );
  };
  export default SearchBar;
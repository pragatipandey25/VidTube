import React from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
import Feed from "../../Components/Feed/Feed";

const Search = () => {
  const { query } = useParams();

  return (
    <div className="search-page">
      <div className="search-header">
        <h2>
          Search results for: <span>"{decodeURIComponent(query)}"</span>
        </h2>
      </div>
      <Feed category={0} searchQuery={decodeURIComponent(query)} />
    </div>
  );
};

export default Search;

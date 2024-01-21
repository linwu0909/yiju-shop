import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";

const Search = (props) => {
  const params = useParams(props);
  return (
    <div>
      <SearchHeader></SearchHeader>
      <SearchList search={params.keywords} />
    </div>
  );
};

export default Search;

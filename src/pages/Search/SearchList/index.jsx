import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

const SearchList = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    api
      .search({
        search: props.search,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setSearchData(res.data.result.data);
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <div>等待数据加载中...</div>
      )}
      <LoadMore />
    </div>
  );
};

export default SearchList;

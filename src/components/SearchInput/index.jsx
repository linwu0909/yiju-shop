import React, { useState, useRef, useEffect } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import * as searchAction from "../../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchInput = (props) => {
  const [keywords, setKeywords] = useState("");
  // const searchKey = useRef();
  const dispatch = useDispatch();
  const reduxKeywords = useSelector((state) => state.search);
  const params = useParams();

  function keyUpHandle(e) {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        props.history.push("/search/" + keywords);
        dispatch(searchAction.updateSearch(keywords));
      }
    }
  }

  useEffect(() => {
    if (params.keywords) {
      dispatch(searchAction.updateSearch(params.keywords));
    } else {
      dispatch(searchAction.updateSearch(""));
    }
    setKeywords(reduxKeywords.search);
  }, [reduxKeywords.search, params.keywords]);

  function changeHandle(e) {
    setKeywords(e.target.value);
  }
  return (
    <input
      className="search-input"
      type="text"
      onKeyUp={keyUpHandle}
      value={keywords}
      onChange={changeHandle}
      // ref={searchKey}
    />
  );
};

export default withRouter(SearchInput);

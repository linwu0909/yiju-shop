import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput";

const HeaderNav = () => {
  const city = useSelector((state) => state.city);
  return (
    <div id="home-header" className="clear-fix">
      <div className="home-header-left float-left">
        <Link to="/city">
          <span>{city.cityName}</span>
          <i className="iconfont icon-angle-down"></i>
        </Link>
      </div>
      <div className="home-header-right float-right">
        <Link to="/order">
          <i className="iconfont icon-cart"></i>
        </Link>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="iconfont icon-search"></i>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;

import React from "react";
import "./style.less";
import { withRouter } from "react-router-dom";

const CityList = (props) => {
  function clickCityHandle(city) {
    props.onEvent(city);
  }
  return (
    <div className="city-list-container">
      <h3>热门城市</h3>
      <ul className="clear-fix">
        <li onClick={() => clickCityHandle("北京")}>
          <span>北京</span>
        </li>
        <li onClick={() => clickCityHandle("上海")}>
          <span>上海</span>
        </li>
        <li onClick={() => clickCityHandle("广州")}>
          <span>广州</span>
        </li>
        <li onClick={() => clickCityHandle("深圳")}>
          <span>深圳</span>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(CityList);

import React, { useState } from "react";
import { useEffect } from "react";
import CitySelect from "react-city-select";
import api from "../../../api";
import cityData from "../../../data/city";
import "./style.less";

const CityLists = (props) => {
  const [citysData, setCitysData] = useState(cityData);
  function handleSelectCity(cityData) {
    console.log(cityData);
    props.onEvent(cityData.name);
  }
  useEffect(() => {
    api.getCityList().then((res) => {
      console.log(res.data);
      if (res.status == 200) {
        setCitysData(res.data.result.citylist);
      }
    });
  }, []);
  return (
    <div className="citylists">
      <h3>城市列表</h3>
      <CitySelect data={citysData} onSelectItem={handleSelectCity}></CitySelect>
    </div>
  );
};

export default CityLists;

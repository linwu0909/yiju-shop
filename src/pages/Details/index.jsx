import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const params = useParams(props);
  return <div>详情:{params.id}</div>;
};

export default Details;

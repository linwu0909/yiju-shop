import React from "react";
import { useParams } from "react-router-dom";
import DetailsList from "./DetailsList";
const Details = (props) => {
  const params = useParams(props);
  return (
    <div>
      <DetailsList id={params.id} />
    </div>
  );
};

export default Details;

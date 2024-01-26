import react from "react";
import Item from "./Item";

const OrderListView = (props) => {
  return (
    <div>
      {props.data.map((ele, index) => {
        return <Item key={index} data={ele} user={props.user}></Item>;
      })}
    </div>
  );
};

export default OrderListView;

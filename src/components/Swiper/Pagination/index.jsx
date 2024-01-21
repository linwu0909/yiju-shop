import React from "react";
import "./style.less";
import classnames from "classnames";

const Pagination = (props) => {
  let arr = new Array(props.len).fill(1);
  let currentIndex = props.currentIndex;
  return (
    <div className="swiper-pagination">
      <ul>
        {arr.map((ele, index) => {
          return (
            <li
              className={classnames({ select: currentIndex === index })}
              key={index}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

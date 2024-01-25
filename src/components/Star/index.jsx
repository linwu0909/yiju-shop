import React from "react";

const Star = (props) => {
  let num = props.num;
  if (num > 5) {
    num = 5;
  }
  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((ele, index) => {
        let show =
          num >= ele ? (
            <i key={index} className={"iconfont icon-Star-copy light"}></i>
          ) : (
            <i key={index} className={"iconfont icon-star"}></i>
          );
        console.log(num, ele, show);
        return show;
      })}
    </div>
  );
};

export default Star;

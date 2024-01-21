import React from "react";
import "./style.less";

const PubHeader = (props) => {
  function backHandle() {
    window.history.back();
  }
  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  );
};

export default PubHeader;

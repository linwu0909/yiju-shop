import React, { useState, useEffect } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as collectActions from "../../../redux/actions/collect";

const BuyAndStoreView = (props) => {
  const dispatch = useDispatch();
  const [isCollect, setIsCollect] = useState(false);

  // 初始化操作
  useEffect(() => {
    setIsCollect(isStore());
  }, []);

  function storeHandle() {
    if (props.user.token) {
      if (isStore()) {
        // 已收藏
        console.log("已收藏");
        setIsCollect(true);
        dispatch(collectActions.removeCollect(props.id));
      } else {
        //未收藏
        setIsCollect(false);
        dispatch(collectActions.setCollect(props.id));
      }
    } else {
      props.history.push("/login");
    }
  }

  function isStore() {
    let collects = props.collects;
    let id = props.id;
    return collects.some((item) => {
      return item == id;
    });
  }
  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {!isCollect ? (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        ) : (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        )}
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  );
};

export default withRouter(BuyAndStoreView);

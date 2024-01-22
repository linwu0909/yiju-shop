import React, { useRef, useState, useEffect } from "react";
import "./style.less";

const LoadMore = () => {
  const more = useRef();
  const [loadTop, setLoadTop] = useState(10000);

  useEffect(() => {
    let timer = null;
    let winHeight = document.documentElement.clientHeight;
    function scrollHandle() {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top);
        if (timer) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              console.log("加载更多数据");
            }
          }, 300);
        }
      }
    }
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
      clearTimeout(timer);
    };
  }, [loadTop]);

  return (
    <div className="load" ref={more}>
      加载更多
    </div>
  );
};

export default LoadMore;

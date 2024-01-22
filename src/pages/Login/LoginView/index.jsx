import React, { useState } from "react";
import "./style.less";
import api from "../../../api";

const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function onSubmitHandle(e) {
    e.preventDefault();
    api.login({ username, password }).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
        props.onLoginEvent(res.data);
      } else {
        console.log("登录失败");
      }
    });
  }
  function changeHandle(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <div id="login-container">
      <div className="input-container phone-container">
        <i className="icon-tablet"></i>
        <input
          type="text"
          placeholder="用户名/手机号"
          name="username"
          value={username}
          onChange={changeHandle}
        ></input>
      </div>
      <div className="input-container password-container">
        <i className="icon-key"></i>
        <button>发送验证码</button>
        <input
          type="password"
          placeholder="输入验证码"
          name="password"
          value={password}
          onChange={changeHandle}
        ></input>
      </div>
      <button className="btn-login" onClick={onSubmitHandle}>
        登录
      </button>
    </div>
  );
};

export default LoginView;

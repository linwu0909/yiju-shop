import React, { useState } from "react";
import "./style.less";
import api from "../../../api";
import validator from "../../../utils/validator";
import classnames from "classnames";

const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  function onSubmitHandle(e) {
    e.preventDefault();
    let { isValid, errors } = validator({
      username,
      password,
    });
    if (!isValid) {
      api.login({ username, password }).then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          setErrors({});

          props.onLoginEvent(res.data);
        } else {
          console.log("登录失败");
        }
      });
    } else {
      // console.log(errors);
      setErrors(errors);
    }
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
      <div
        className={classnames("input-container phone-container", {
          "input-container-error": errors.username,
        })}
      >
        <i className="icon-tablet"></i>
        <input
          type="text"
          placeholder="用户名/手机号"
          name="username"
          value={username}
          onChange={changeHandle}
        ></input>
      </div>
      <div
        className={classnames("password-container phone-container", {
          "input-container-error": errors.password,
        })}
      >
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

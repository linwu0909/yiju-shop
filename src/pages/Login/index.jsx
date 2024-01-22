import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginActions from "../../redux/actions/login";

const Login = () => {
  const dispatch = useDispatch();
  function loginHandle(user) {
    dispatch(loginActions.setLogin(user));
    window.history.back();
  }
  return (
    <div>
      <LoginView onLoginEvent={loginHandle} />
    </div>
  );
};

export default Login;

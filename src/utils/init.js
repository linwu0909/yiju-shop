import * as loginActions from "../redux/actions/login";
import store from "../redux/store";

if (localStorage.getItem("user")) {
  store.dispatch(
    loginActions.setLogin(JSON.parse(localStorage.getItem("user")))
  );
}

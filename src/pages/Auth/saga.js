import { put, call, takeLatest } from "redux-saga/effects";
import { loginService } from "../../services/auth";
import { AuthTypes, AuthActions } from "./reducer";
import { RootActions } from "../Root/reducer";

function* loginSaga({ identifier, password, navigate }) {
  try {
    window.localStorage.removeItem("token");
    const postBody = { identifier, password };
    const response = yield call(loginService, postBody);

    if (response.ok) {
      yield put(
        RootActions.userSignIn(response?.data?.user, response.data.jwt)
      );
      window.localStorage.setItem("token", response.data.jwt);
      yield put(AuthActions.loginSuccess());
      navigate("/", { replace: true });
    } else {
      yield put(AuthActions.loginFail("login failed"));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(AuthTypes.REQUEST_LOGIN, loginSaga);
}

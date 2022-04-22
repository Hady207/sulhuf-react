import { fork } from "redux-saga/effects";
import AuthSaga from "../pages/Auth/saga";
import CreationSaga from "../pages/CreateItem/saga";
import DashboardSaga from "../pages/Dashboard/saga";
import UpdateSaga from "../pages/EditItem/saga";
import ViewItemSaga from "../pages/ViewItem/saga";
import OrdersSaga from "../pages/Orders/saga";
import OrderSaga from "../pages/ViewOrder/saga";
import UploadSaga from "../pages/UploadFile/saga";

export default function* root() {
  yield fork(AuthSaga);
  yield fork(CreationSaga);
  yield fork(DashboardSaga);
  yield fork(UpdateSaga);
  yield fork(ViewItemSaga);
  yield fork(OrdersSaga);
  yield fork(OrderSaga);
  yield fork(UploadSaga);
}

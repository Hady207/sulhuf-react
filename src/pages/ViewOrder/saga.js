import { put, call, takeLatest } from "redux-saga/effects";
import { orderService } from "../../services/dashboard";
import { ViewOrderTypes, ViewOrderActions } from "./reducer";

function* fetchOrderSaga({ id }) {
  try {
    const res = yield call(orderService, id);

    console.log(res);

    if (res.ok) {
      yield put(ViewOrderActions.orderRes(res?.data));
    } else {
      yield put(ViewOrderActions.orderFail(res.data.error.message));
    }
  } catch (error) {
    yield put(ViewOrderActions.orderFail(error.message));
  }
}

export default function* itemsRootWacher() {
  yield takeLatest(ViewOrderTypes.ORDER_REQ, fetchOrderSaga);
}

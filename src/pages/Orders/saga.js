import { put, call, takeLatest } from "redux-saga/effects";
import { ordersService } from "../../services/dashboard";
import { OrdersTypes, OrdersActions } from "./reducer";

function* fetchOrdersSaga() {
  try {
    const queryParams = { includeCount: true, _start: 10, _limit: 10 };
    const res = yield call(ordersService, queryParams);
    console.log(res);
    if (res.ok) {
      yield put(OrdersActions.ordersRes(res?.data));
    } else {
      yield put(OrdersActions.ordersFail(res.data.error.message));
    }
  } catch (error) {
    yield put(OrdersActions.ordersFail(error.message));
  }
}

export default function* ordersRootWacher() {
  yield takeLatest(OrdersTypes.ORDERS_REQ, fetchOrdersSaga);
}

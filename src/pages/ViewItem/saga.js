import { put, call, takeLatest } from "redux-saga/effects";
import { itemService } from "../../services/dashboard";
import { ViewItemTypes, ViewItemActions } from "./reducer";

function* fetchItemSaga({ id }) {
  try {
    const res = yield call(itemService, id);

    console.log(res);

    if (res.ok) {
      yield put(ViewItemActions.itemRes(res?.data));
    } else {
      yield put(ViewItemActions.itemFail(res.data.error.message));
    }
  } catch (error) {
    yield put(ViewItemActions.itemFail(error.message));
  }
}

export default function* itemsRootWacher() {
  yield takeLatest(ViewItemTypes.ITEM_REQ, fetchItemSaga);
}

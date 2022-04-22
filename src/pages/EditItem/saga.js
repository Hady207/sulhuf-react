import { put, call, takeLatest } from "redux-saga/effects";
import { itemUpdateService } from "../../services/dashboard";
import { UpdateItemTypes, UpdateItemActions } from "./reducer";

function* editItemSaga({ id, updateBody, navigation }) {
  try {
    const res = yield call(itemUpdateService, id, updateBody);

    if (res.ok) {
      yield put(UpdateItemActions.updateRes(res?.data));
      navigation("/", { replace: true });
    }
  } catch (error) {
    yield put(UpdateItemActions.updateFail(error.message));
  }
}

export default function* homeRootWacher() {
  yield takeLatest(UpdateItemTypes.UPDATE_REQ, editItemSaga);
}

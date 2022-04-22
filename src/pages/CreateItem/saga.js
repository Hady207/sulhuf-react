import { put, call, takeLatest } from "redux-saga/effects";
import { itemCreationService } from "../../services/dashboard";
import { CreateItemTypes, CreateItemActions } from "./reducer";

function* createItemSaga({ postBody, navigation }) {
  try {
    const res = yield call(itemCreationService, postBody);
    console.log(res.data);
    if (res.ok) {
      yield put(CreateItemActions.creationRes(res?.data));
      navigation("/", { replace: true });
    } else {
      yield put(CreateItemActions.creationFail(res.data.error.message));
    }
  } catch (error) {
    yield put(CreateItemActions.creationFail(error.message));
  }
}

export default function* creationRootWacher() {
  yield takeLatest(CreateItemTypes.CREATION_REQ, createItemSaga);
}

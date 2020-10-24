import {put, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'
//Actions
import * as actions from "./actions"
import {getPayMethodsFailed} from './actions'

function* fetchPayMethods() {
  try {
    yield console.log('Hello saga')
  }catch (e) {
    yield put(getPayMethodsFailed())
  }
}


export default function* watcherUsersSaga() {
  yield takeLatest(getType(actions.getPayMethodsRequest), fetchPayMethods);
}
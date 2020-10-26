import {all} from 'redux-saga/effects'
import converterSaga from './converter/sagas'

export default function* rootSaga() {
  yield all([
    converterSaga()
  ])
}
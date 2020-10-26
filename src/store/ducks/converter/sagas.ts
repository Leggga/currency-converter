import {call, debounce, put, select, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'
//Actions
import * as actions from './actions'
import {calculateAmountSuccess} from './actions'
import {
  calculateAmountAPI,
  CalculateAmountResponse,
  ConverterRequestData,
  getPaymentMethodsAPI,
  PaymentMethodsResponse
} from 'store/ducks/converter/api'
import {setInvoiceAmount, setInvoiceMethods} from 'store/ducks/invoice/actions'
import {setWithdrawAmount, setWithdrawMethods} from 'store/ducks/withdraw/actions'
import {selectConverterData} from 'store/ducks/converter/selectors'

function* fetchPayMethods() {
  try {
    const {invoice, withdraw}: PaymentMethodsResponse = yield call(getPaymentMethodsAPI)
    yield put(actions.getPayMethodsSuccess())
    yield put(setInvoiceMethods(invoice))
    yield put(setWithdrawMethods(withdraw))
  } catch (e) {
    yield put(actions.getPayMethodsFailed())
  }
}

function* calculateAmount() {
  try {
    yield put(actions.toggleIsCalculating(true))
    const requestData: ConverterRequestData = yield select(selectConverterData)
    const {amount}: CalculateAmountResponse = yield call(calculateAmountAPI, requestData)

    yield put(calculateAmountSuccess())

    if (requestData.base === 'invoice') {
      yield put(setWithdrawAmount(amount))
    } else {
      yield put(setInvoiceAmount(amount))
    }

  } catch (e) {
    yield put(actions.calculateAmountFailed())
  } finally {
    yield put(actions.toggleIsCalculating(false))
  }
}

function* sendBid(action: any) {
  try {

  } catch (e) {

  }
}


export default function* watcherConverterSaga() {
  yield takeLatest(getType(actions.getPayMethodsRequest), fetchPayMethods)
  yield debounce(1000, getType(actions.calculateAmountRequest), calculateAmount)
  yield takeLatest(getType(actions.sendBidRequest), sendBid)
}
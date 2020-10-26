import {call, debounce, put, select, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'
import history from 'views/routes/history'
//API and Types
import * as API from 'store/ducks/converter/api'
//Actions
import * as actions from './actions'
import {toggleIsPayMethodsSettled} from './actions'
import {setInvoiceAmount, setInvoiceMethods} from 'store/ducks/invoice/actions'
import {setWithdrawAmount, setWithdrawMethods} from 'store/ducks/withdraw/actions'
//Selectors
import {selectConverterData} from 'store/ducks/converter/selectors'
import {CalculateAmountResponse, ConverterRequestData, PaymentMethodsResponse, SendBidResponse} from 'types'

function* fetchPayMethods() {
  try {
    const {invoice, withdraw}: PaymentMethodsResponse = yield call(API.getPaymentMethodsAPI)
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
    let result: number = requestData.amount

    if (requestData.amount > 0) { //prevent call api with Zero
      const {amount}: CalculateAmountResponse = yield call(API.calculateAmountAPI, requestData)
      result = amount
      yield put(actions.calculateAmountSuccess())
    }

    if (requestData.base === 'invoice') {
      yield put(setWithdrawAmount(result))
    } else {
      yield put(setInvoiceAmount(result))
    }

  } catch (e) {
    yield put(actions.calculateAmountFailed())
  } finally {
    yield put(actions.toggleIsCalculating(false))
  }
}

function* sendBid() {
  try {
    yield put(actions.toggleIsLoading(true))

    const requestData: ConverterRequestData = yield select(selectConverterData)
    const response: SendBidResponse = yield call(API.sendBidAPI, requestData)

    yield put(actions.sendBidSuccess())
    yield put(actions.toggleIsPayMethodsSettled(true))

    history.push('/success', response)
  } catch (e) {
    yield put(actions.sendBidFailed())
  } finally {
    yield put(actions.toggleIsLoading(false))
  }
}

function* resetApp() {
  yield put(setWithdrawAmount(0))
  yield put(setInvoiceAmount(0))
  yield put(toggleIsPayMethodsSettled(false))
  history.push('/')
}


export default function* watcherConverterSaga() {
  yield takeLatest(getType(actions.getPayMethodsRequest), fetchPayMethods)
  yield debounce(1000, getType(actions.calculateAmountRequest), calculateAmount)
  yield takeLatest(getType(actions.sendBidRequest), sendBid)
  yield takeLatest(getType(actions.resetApp), resetApp)
}
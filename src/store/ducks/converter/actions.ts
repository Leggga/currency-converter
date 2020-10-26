import {createAction} from 'typesafe-actions'
import {ConverterRequestData} from 'store/ducks/converter/api'
import {PaymentBase} from 'types'


export const getPayMethodsRequest = createAction('converter/GET_PAY_METHODS_REQUEST')()
export const getPayMethodsSuccess = createAction('converter/GET_PAY_METHODS_SUCCESS')()
export const getPayMethodsFailed = createAction('converter/GET_PAY_METHODS_FAILED')()

export const calculateAmountRequest = createAction('converter/CALC_AMOUNT_REQUEST')()
export const calculateAmountSuccess = createAction('converter/CALC_AMOUNT_SUCCESS')()
export const calculateAmountFailed = createAction('converter/CALC_AMOUNT_FAILED')()

export const sendBidRequest = createAction('converter/SEND_BID_REQUEST',
  (converterData: ConverterRequestData) => converterData)()
export const sendBidSuccess = createAction('converter/SEND_BID_SUCCESS')()
export const sendBidFailed = createAction('converter/SEND_BID_FAILED')()

export const setPaymentBase = createAction('converter/SET_PAYMENT_BASE',
  (base: PaymentBase) => base)()
export const toggleIsCalculating = createAction('converter/TOGGLE_IS_CALCULATING',
  (isCalculating: boolean) => isCalculating)()
export const toggleIsExchanging = createAction('converter/TOGGLE_IS_EXCHANGING',
  (isExchanging: boolean) => isExchanging)()
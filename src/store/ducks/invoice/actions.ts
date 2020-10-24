import {createAction} from 'typesafe-actions'
import {PayMethodType} from 'types'

export const getPayMethodsRequest = createAction('invoice/GET_PAY_METHODS_REQUEST')()
export const getPayMethodsSuccess = createAction('invoice/GET_PAY_METHODS_SUCCESS',
  (payMethods: PayMethodType[]) => payMethods)()
export const getPayMethodsFailed = createAction('invoice/GET_PAY_METHODS_FAILED')()

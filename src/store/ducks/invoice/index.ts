import {ActionType, createReducer} from 'typesafe-actions'
import * as actions from './actions'
import {BasePaymentState} from 'store/ducks/types'

export type InvoiceActions = ActionType<typeof actions>

const initialState: BasePaymentState = {
  payMethods: [],
  currentPayMethod: -1,
  amount: 0
}

const reducer = createReducer<BasePaymentState, InvoiceActions>(initialState)
  .handleAction(actions.setInvoiceMethods, (state, {payload}) => ({
    ...state,
    payMethods: payload,
    currentPayMethod: payload.length ? payload[0].id : -1
  }))
  .handleAction(actions.setCurrentInvoiceMethod, (state, {payload}) => ({...state, currentPayMethod: payload}))
  .handleAction(actions.setInvoiceAmount, (state, {payload}) => ({...state, amount: payload}))

export default reducer
import {ActionType, createReducer} from 'typesafe-actions'
import * as actions from './actions'
import {BasePaymentState} from 'store/ducks/types'

export type WithdrawAction = ActionType<typeof actions>

const initialState: BasePaymentState = {
  payMethods: [],
  currentPayMethod: -1,
  amount: 0
}

const reducer = createReducer<BasePaymentState, WithdrawAction>(initialState)
  .handleAction(actions.setWithdrawMethods, (state, {payload}) => ({
    ...state,
    payMethods: payload,
    currentPayMethod: payload.length ? payload[0].id : -1
  }))
  .handleAction(actions.setCurrentWithdrawMethod, (state, {payload}) => ({...state, currentPayMethod: payload}))
  .handleAction(actions.setWithdrawAmount, (state, {payload}) => ({...state, amount: payload}))

export default reducer
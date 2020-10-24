import {ActionType, createReducer} from 'typesafe-actions'
import * as actions from './actions'
import {InvoiceStateType} from 'store/ducks/invoice/types'

export type InvoiceActions = ActionType<typeof actions>

const initialState: InvoiceStateType = {
  payMethods: [],
  currentPayMethod: -1,
  amount: 0
}

const reducer = createReducer<InvoiceStateType, InvoiceActions>(initialState)
  .handleAction(actions.getPayMethodsSuccess, (state, action) => ({...state, payMethods: action.payload}))

export default reducer
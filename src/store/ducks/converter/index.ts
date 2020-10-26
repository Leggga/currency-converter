import {ActionType, createReducer} from 'typesafe-actions'
import * as actions from './actions'
import {ConverterState} from 'store/ducks/converter/types'

export type ConverterActions = ActionType<typeof actions>

const initialState: ConverterState = {
  base: 'invoice',
  isCalculating: false,
  isExchanging: false
}

const reducer = createReducer<ConverterState, ConverterActions>(initialState)
  .handleAction(actions.setPaymentBase, (state, {payload}) => ({
    ...state,
    base: payload
  }))
  .handleAction(actions.toggleIsCalculating, (state, {payload}) => ({
    ...state,
    isCalculating: payload
  }))

export default reducer
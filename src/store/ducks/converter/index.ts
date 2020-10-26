import {ActionType, createReducer} from 'typesafe-actions'
import * as actions from './actions'
import {ConverterState} from 'store/ducks/converter/types'

export type ConverterActions = ActionType<typeof actions>

const initialState: ConverterState = {
  base: 'invoice',
  isLoading: false,
  isCalculating: false,
  isPayMethodsSettled: false
}

const reducer = createReducer<ConverterState, ConverterActions>(initialState)
  .handleAction(actions.setPaymentBase, (state, {payload}) => ({...state, base: payload}))
  .handleAction(actions.toggleIsCalculating, (state, {payload}) => ({...state, isCalculating: payload}))
  .handleAction(actions.toggleIsLoading, (state, {payload}) => ({...state, isLoading: payload}))
  .handleAction(actions.toggleIsPayMethodsSettled, (state, {payload}) => ({...state, isPayMethodsSettled: payload}))

export default reducer
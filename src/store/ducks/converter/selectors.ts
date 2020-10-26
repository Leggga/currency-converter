import {createSelector} from 'reselect'
import {AppState} from 'store/ducks/rootReducer'
import {ConverterRequestData} from 'store/ducks/converter/api'

const selectState = (state: AppState) => state
const selectConverter = (state: AppState) => state.converter


export const selectBase = createSelector(selectConverter, converter => converter.base)
export const selectIsCalculating = createSelector(selectConverter, converter => converter.isCalculating)
export const selectConverterData = createSelector(selectState, (state): ConverterRequestData => ({
  invoicePayMethod: state.invoice.currentPayMethod,
  withdrawPayMethod: state.withdraw.currentPayMethod,
  amount: state.converter.base === 'invoice' ? state.invoice.amount : state.withdraw.amount,
  base: state.converter.base
}))

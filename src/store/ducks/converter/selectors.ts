import {createSelector} from 'reselect'
import {AppState} from 'store/ducks/rootReducer'
import {ConverterRequestData} from 'types'

const selectState = (state: AppState) => state
const selectConverter = (state: AppState) => state.converter

export const selectIsCalculating = createSelector(selectConverter, converter => converter.isCalculating)
export const selectIsLoading = createSelector(selectConverter, converter => converter.isLoading)
export const selectIsPayMethodSettled = createSelector(selectConverter, converter => converter.isPayMethodsSettled)
export const selectConverterData = createSelector(selectState, (state): ConverterRequestData => ({
  invoicePayMethod: state.invoice.currentPayMethod,
  withdrawPayMethod: state.withdraw.currentPayMethod,
  amount: state.converter.base === 'invoice' ? state.invoice.amount : state.withdraw.amount,
  base: state.converter.base
}))

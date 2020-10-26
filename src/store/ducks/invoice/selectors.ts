import {createSelector} from 'reselect'
import {AppState} from 'store/ducks/rootReducer'

const selectInvoice = (state: AppState) => state.invoice

export const selectInvoicePayMethods = createSelector(selectInvoice, invoice => invoice.payMethods.map(item => ({
  value: item.id,
  label: item.name
})))
export const selectCurrentInvoicePayMethod = createSelector(selectInvoice, invoice => invoice.currentPayMethod)
export const selectInvoiceAmount = createSelector(selectInvoice, invoice => invoice.amount)
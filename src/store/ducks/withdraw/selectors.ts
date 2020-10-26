import {AppState} from 'store/ducks/rootReducer'
import {createSelector} from 'reselect'

const selectWithdraw = (state: AppState) => state.withdraw

export const selectWithdrawPayMethods = createSelector(selectWithdraw, withdraw => withdraw.payMethods.map(item => ({
  value: item.id,
  label: item.name
})))
export const selectCurrentWithdrawPayMethod = createSelector(selectWithdraw, withdraw => ({
  id: withdraw.currentPayMethod,
  name: withdraw.payMethods.find(m => m.id === withdraw.currentPayMethod)?.name
}))
export const selectWithdrawAmount = createSelector(selectWithdraw, withdraw => withdraw.amount)
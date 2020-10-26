import {createAction} from 'typesafe-actions'
import {PayMethodType} from 'types'

export const setWithdrawMethods = createAction('withdraw/SET_WITHDRAW_METHODS',
  (payMethods: PayMethodType[]) => payMethods)()
export const setCurrentWithdrawMethod = createAction('withdraw/SET_CURRENT_WITHDRAW_METHOD',
  (methodId: number) => methodId)()
export const setWithdrawAmount = createAction('withdraw/SET_WITHDRAW_AMOUNT',
  (amount:number) => amount)()
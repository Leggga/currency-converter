import {createAction} from 'typesafe-actions'
import {PayMethodType} from 'types'

export const setInvoiceMethods = createAction('invoice/SET_INVOICE_METHODS',
  (payMethods: PayMethodType[]) => payMethods)()
export const setCurrentInvoiceMethod = createAction('invoice/SET_CURRENT_INVOICE_METHOD',
  (methodId: number) => methodId)()
export const setInvoiceAmount = createAction('invoice/SET_INVOICE_AMOUNT',
  (amount:number) => amount)()
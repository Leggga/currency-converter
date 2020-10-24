import {PayMethodType} from 'types'

export type InvoiceStateType = Readonly<{
  payMethods: PayMethodType[]
  currentPayMethod: number
  amount: number
}>
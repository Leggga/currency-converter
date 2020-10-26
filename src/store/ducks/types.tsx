import {PayMethodType} from 'types'

export type BasePaymentState = Readonly<{
  payMethods: PayMethodType[]
  currentPayMethod: number
  amount: number
}>
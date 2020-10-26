import {PaymentBase} from 'types'

export type ConverterState = Readonly<{
  base: PaymentBase
  isCalculating: boolean
  isLoading: boolean
  isPayMethodsSettled: boolean
}>
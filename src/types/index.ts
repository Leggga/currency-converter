export type PayMethodType = {
  id: number
  name: string
}
export type PaymentBase = 'invoice' | 'withdraw'
export type PaymentMethodsResponse = {
  invoice: PayMethodType[]
  withdraw: PayMethodType[]
}
export type ConverterRequestData = {
  base: PaymentBase
  amount: number
  invoicePayMethod: number
  withdrawPayMethod: number
}
export type CalculateAmountResponse = {
  amount: number
}
export type SendBidResponse = {
  message: string
}
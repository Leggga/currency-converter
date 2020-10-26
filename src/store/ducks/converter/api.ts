import API from 'api/instance'
import {PaymentBase, PayMethodType} from 'types'

export const getPaymentMethodsAPI = () => API.get<PaymentMethodsResponse>('/payMethods').then(resp => resp.data)
export const calculateAmountAPI = (params: ConverterRequestData) => API.get<CalculateAmountResponse>('/payMethods/calculate', {params})
  .then(resp => resp.data)
export const sendBidAPI = (data: ConverterRequestData) => API.post<SendBidResponse>('/bids', data).then(resp => resp.data)

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

type SendBidResponse = {
  message: string
}
import API from 'api/instance'
import {CalculateAmountResponse, ConverterRequestData, PaymentMethodsResponse, SendBidResponse} from 'types'

export const getPaymentMethodsAPI = () => API.get<PaymentMethodsResponse>('/payMethods').then(resp => resp.data)
export const calculateAmountAPI = (params: ConverterRequestData) => API.get<CalculateAmountResponse>('/payMethods/calculate', {params})
  .then(resp => resp.data)
export const sendBidAPI = (data: ConverterRequestData) => API.post<SendBidResponse>('/bids', data).then(resp => resp.data)
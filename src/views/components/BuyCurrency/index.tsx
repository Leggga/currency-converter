import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//types
import {PaymentBase} from 'types'
import {OptionType} from 'views/reusable/Select/Select.interface'
//components
import Currency from 'views/components/Currency'
//actions
import {calculateAmountRequest} from 'store/ducks/converter/actions'
import {setCurrentInvoiceMethod, setInvoiceAmount} from 'store/ducks/invoice/actions'
//selectors
import * as selectors from 'store/ducks/invoice/selectors'

type Props = {
  isCalculating: boolean
  onBaseChange: (base: PaymentBase) => void
}

const BuyCurrency: React.FC<Props> = ({isCalculating, onBaseChange}) => {
  const dispatch = useDispatch()
  const amount = useSelector(selectors.selectInvoiceAmount)
  const payMethods = useSelector(selectors.selectInvoicePayMethods)
  const currentPayMethod = useSelector(selectors.selectCurrentInvoicePayMethod)

  const handleChangePaymentMethod = useCallback((option: OptionType) => {
    dispatch(setCurrentInvoiceMethod(option.value))
    dispatch(calculateAmountRequest())
  }, [dispatch])

  const handleChangeAmount = useCallback((value: string | number) => {
    dispatch(setInvoiceAmount(+value))
    dispatch(calculateAmountRequest())
  }, [dispatch])

  const handleChangeBase = useCallback(() => onBaseChange('invoice'), [onBaseChange])

  return (
    <Currency
      title="Buy"
      inputName="invoice"
      payMethods={payMethods}
      amount={amount.toString()}
      isCalculating={isCalculating}
      currentPayMethodId={currentPayMethod.id}
      handleChangeBase={handleChangeBase}
      handleChangeAmount={handleChangeAmount}
      handleChangePaymentMethod={handleChangePaymentMethod}/>
  )
}

export default BuyCurrency
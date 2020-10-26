import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//types
import {PaymentBase} from 'types'
//components
import Select, {OptionType} from 'views/reusable/Select'
import Input from 'views/reusable/Input'
//actions
import {setCurrentInvoiceMethod, setInvoiceAmount} from 'store/ducks/invoice/actions'
import {calculateAmountRequest} from 'store/ducks/converter/actions'
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

  //TODO move it to common component
  return (
    <div className="currency">
      <h1 className="currency__title h1">Buy</h1>
      <div className="currency__fields container__pad">
        <Select
          className="currency__field"
          options={payMethods}
          value={currentPayMethod.id}
          onChange={handleChangePaymentMethod}
        />
        <Input
          className="currency__field"
          name='invoiceAmount'
          value={amount.toString()}
          onInput={handleChangeAmount}
          onFocus={handleChangeBase}
          type="text"
          isDecimal
          isLoading={isCalculating}
        />
      </div>
    </div>
  )
}

export default BuyCurrency
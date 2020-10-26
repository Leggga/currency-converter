import React from 'react'
import Select, {OptionType} from 'views/reusable/Select'
import Input, {OnChangeType} from 'views/reusable/Input'
import {PaymentBase} from 'types'
import {useSelector} from 'react-redux'
import * as selectors from 'store/ducks/invoice/selectors'

type Props = {
  base: PaymentBase
  onPaymentMethodChange: (base: PaymentBase, id: number) => void
  onAmountChange: (base: PaymentBase, amount: number) => void
  onBaseChange: (base: PaymentBase) => void
}

const BuyCurrency: React.FC<Props> = ({base, onPaymentMethodChange, onAmountChange, onBaseChange}) => {
  const amount = useSelector(selectors.selectInvoiceAmount)
  const payMethods = useSelector(selectors.selectInvoicePayMethods)
  const currentPayMethod = useSelector(selectors.selectCurrentInvoicePayMethod)

  const handleChangePayMethod = (option: OptionType) => {
    onPaymentMethodChange(base, option.value)
  }
  //TODO add debounce
  const handleChangeAmount: OnChangeType = (value, _) => {
    onAmountChange(base, +value)
  }

  return (
    <div className="currency">
      <h1 className="currency__title">Buy</h1>
      <div className="currency__fields">
        <Select
          className="currency__field"
          options={payMethods}
          value={currentPayMethod}
          onChange={handleChangePayMethod}
        />
        <Input
          className="currency__field"
          name={base}
          value={amount.toString()}
          onInput={handleChangeAmount}

          type="text"
          isDecimal
        />
      </div>
    </div>
  )
}

export default BuyCurrency
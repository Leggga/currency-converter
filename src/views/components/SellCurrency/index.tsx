import React from 'react'
import Select, {OptionType} from 'views/reusable/Select'
import Input, {OnChangeType} from 'views/reusable/Input'
import {PaymentBase} from 'types'
import {useSelector} from 'react-redux'
import * as selectors from 'store/ducks/withdraw/selectors'
import {selectIsCalculating} from 'store/ducks/converter/selectors'

type Props = {
  base: PaymentBase
  onPaymentMethodChange: (base: PaymentBase, id: number) => void
  onAmountChange: (base: PaymentBase, amount: number) => void
}

const SellCurrency: React.FC<Props> = ({base, onPaymentMethodChange, onAmountChange}) => {
  const amount = useSelector(selectors.selectWithdrawAmount)
  const payMethods = useSelector(selectors.selectWithdrawPayMethods)
  const currentPayMethod = useSelector(selectors.selectCurrentWithdrawPayMethod)
  const isCalculating = useSelector(selectIsCalculating)

  //TODO move this handlers to parent
  const handleChangePayMethod = (option: OptionType) => {
    onPaymentMethodChange(base, option.value)
  }
  //TODO add debounce
  const handleChangeAmount: OnChangeType = (value, _) => {
    onAmountChange(base, +value)
  }

  return (
    <div className="currency">
      <h1 className="currency__title">Sell</h1>
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
          isLoading={isCalculating}
        />
      </div>
    </div>
  )
}

export default SellCurrency
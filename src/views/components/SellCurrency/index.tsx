import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//types
import {PaymentBase} from 'types'
//components
import Select, {OptionType} from 'views/reusable/Select'
import Input from 'views/reusable/Input'
//actions
import {calculateAmountRequest} from 'store/ducks/converter/actions'
import {setCurrentWithdrawMethod, setWithdrawAmount} from 'store/ducks/withdraw/actions'
//selectors
import * as selectors from 'store/ducks/withdraw/selectors'

type Props = {
  isCalculating: boolean
  onBaseChange: (base: PaymentBase) => void
}

const SellCurrency: React.FC<Props> = ({isCalculating, onBaseChange}) => {
  const dispatch = useDispatch()
  const amount = useSelector(selectors.selectWithdrawAmount)
  const payMethods = useSelector(selectors.selectWithdrawPayMethods)
  const currentPayMethod = useSelector(selectors.selectCurrentWithdrawPayMethod)

  const handleChangePaymentMethod = useCallback((option: OptionType) => {
    dispatch(setCurrentWithdrawMethod(option.value))
    dispatch(calculateAmountRequest())
  }, [dispatch])

  const handleChangeAmount = useCallback((value: string | number) => {
    dispatch(setWithdrawAmount(+value))
    dispatch(calculateAmountRequest())
  }, [dispatch])

  const handleChangeBase = () => {
    onBaseChange('withdraw')
  }

  return (
    <div className="currency">
      <h1 className="currency__title h1">Sell</h1>
      <div className="currency__fields">
        <Select
          className="currency__field"
          options={payMethods}
          value={currentPayMethod.id}
          onChange={handleChangePaymentMethod}
        />
        <Input
          className="currency__field"
          name="withdrawAmount"
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

export default SellCurrency
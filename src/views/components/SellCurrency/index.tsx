import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//types
import {PaymentBase} from 'types'
import {OptionType} from 'views/reusable/Select'
//components
import Currency from 'views/components/Currency'
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

  const handleChangeBase = useCallback(() => onBaseChange('withdraw'), [onBaseChange])

  return (
    <Currency
      title="Sell"
      inputName="withdraw"
      payMethods={payMethods}
      amount={amount.toString()}
      isCalculating={isCalculating}
      currentPayMethodId={currentPayMethod.id}
      handleChangeBase={handleChangeBase}
      handleChangeAmount={handleChangeAmount}
      handleChangePaymentMethod={handleChangePaymentMethod}/>
  )
}

export default SellCurrency
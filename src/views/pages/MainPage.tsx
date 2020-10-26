import React, {useCallback, useEffect} from 'react'
import BuyCurrency from 'views/components/BuyCurrency'
import {useDispatch} from 'react-redux'
import {calculateAmountRequest, getPayMethodsRequest, setPaymentBase} from 'store/ducks/converter/actions'
import {PaymentBase} from 'types'
import {setCurrentInvoiceMethod, setInvoiceAmount} from 'store/ducks/invoice/actions'
import {setCurrentWithdrawMethod, setWithdrawAmount} from 'store/ducks/withdraw/actions'
import SellCurrency from 'views/components/SellCurrency'
import Button from 'views/reusable/Button'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPayMethodsRequest())
  }, [dispatch])

  //TODO don't call async methods if value is the same and check if value more than 0
  //TODO change base only when focus on input

  const handleChangePaymentMethod = useCallback((base: PaymentBase, id: number) => {
    base === 'invoice' ? dispatch(setCurrentInvoiceMethod(id)) : dispatch(setCurrentWithdrawMethod(id))
  }, [dispatch])

  const handleChangeAmount = useCallback((base: PaymentBase, amount: number) => {
    dispatch(setPaymentBase(base))
    base === 'invoice' ? dispatch(setInvoiceAmount(amount)) : dispatch(setWithdrawAmount(amount))
    dispatch(calculateAmountRequest())
  }, [dispatch])

  const handleChangeBase = useCallback((base:PaymentBase)=> {
    dispatch(setPaymentBase(base))
  }, [dispatch])

  return (
    <div className="converter">
      <div className="converter__grid">
        <BuyCurrency
          base="invoice"
          onPaymentMethodChange={handleChangePaymentMethod}
          onAmountChange={handleChangeAmount}
          onBaseChange={handleChangeBase}
        />
        <SellCurrency
          base="withdraw"
          onPaymentMethodChange={handleChangePaymentMethod}
          onAmountChange={handleChangeAmount}
        />
      </div>
      <div className="converter__bottom">
        <Button classname="converter__btn" onClick={() => console.log("fired")}>Exchanging</Button>
      </div>
    </div>
  )
}

export default MainPage
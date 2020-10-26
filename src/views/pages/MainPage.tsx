import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
//types
import {PaymentBase} from 'types'
//components
import BuyCurrency from 'views/components/BuyCurrency'
import SellCurrency from 'views/components/SellCurrency'
import Button from 'views/reusable/Button'
//actions
import {getPayMethodsRequest, setPaymentBase} from 'store/ducks/converter/actions'
//selectors
import {selectIsCalculating, selectIsPayMethodSettled} from 'store/ducks/converter/selectors'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isCalculating = useSelector(selectIsCalculating)
  const isPayMethodsSettled = useSelector(selectIsPayMethodSettled)

  useEffect(() => {
    !isPayMethodsSettled && dispatch(getPayMethodsRequest())
  }, [dispatch, isPayMethodsSettled])

  //Common
  const handleChangeBase = useCallback((base: PaymentBase) => dispatch(setPaymentBase(base)), [dispatch])
  const handleExchangeBtn = useCallback(() => history.push('submit'), [history])

  return (
    <div className="converter">
      <div className="converter__grid">
        <BuyCurrency
          isCalculating={isCalculating}
          onBaseChange={handleChangeBase}
        />
        <SellCurrency
          isCalculating={isCalculating}
          onBaseChange={handleChangeBase}
        />
      </div>
      <div className="converter__bottom">
        <Button classname="converter__btn" onClick={handleExchangeBtn}>Exchange</Button>
      </div>
    </div>
  )
}

export default MainPage
import React, {useCallback} from 'react'
import {useLocation} from 'react-router-dom'
import Icon from 'views/reusable/Icon'
import {SendBidResponse} from 'types'
import Button from 'views/reusable/Button'
import {useDispatch} from 'react-redux'
import {resetApp} from 'store/ducks/converter/actions'

const SuccessPage: React.FC = () => {
  const dispatch = useDispatch()
  const {state} = useLocation<SendBidResponse>()

  const handleHomeBtn = useCallback(() => dispatch(resetApp()), [dispatch])

  return (
    <div className="converter converter--centered ">
      <Icon name="shield"/>
      <h3 className="h3">{state.message}!</h3>
      <div className="container__pad">
        <p className="p">Your exchange order has been placed successfully and will be processed soon.</p>
      </div>
      <div className="converter__bottom">
        <Button onClick={handleHomeBtn}>Home</Button>
      </div>
    </div>
  )
}

export default SuccessPage
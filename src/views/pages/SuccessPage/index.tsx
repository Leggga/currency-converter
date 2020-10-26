import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
//types
import {SendBidResponse} from 'types'
//components
import Icon from 'views/reusable/Icon'
import Button from 'views/reusable/Button'
//actions
import {resetApp} from 'store/ducks/converter/actions'
//styles
import './SuccessPage.scss'

const SuccessPage: React.FC = () => {
  const dispatch = useDispatch()
  const {state} = useLocation<SendBidResponse>()

  const handleHomeBtn = useCallback(() => dispatch(resetApp()), [dispatch])

  return (
    <div className="successPage page">
      <Icon className="successPage__icon" name="shield"/>
      <h3 className="successPage__title h3">{state.message}!</h3>
      <p className="successPage__text p">Your exchange order has been placed successfully and will be processed soon.</p>
      <div className="blk--centered">
        <Button onClick={handleHomeBtn}>Home</Button>
      </div>
    </div>
  )
}

export default SuccessPage
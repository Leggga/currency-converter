import React, {useCallback} from 'react'
import Button from 'views/reusable/Button'
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentInvoicePayMethod, selectInvoiceAmount} from 'store/ducks/invoice/selectors'
import {selectCurrentWithdrawPayMethod, selectWithdrawAmount} from 'store/ducks/withdraw/selectors'
import {useHistory} from 'react-router-dom'
import {sendBidRequest} from 'store/ducks/converter/actions'
import {selectIsLoading} from 'store/ducks/converter/selectors'

const SubmitPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const invoiceAmount = useSelector(selectInvoiceAmount)
  const withdrawAmount = useSelector(selectWithdrawAmount)
  const invoicePayMethod = useSelector(selectCurrentInvoicePayMethod)
  const withdrawPayMethod = useSelector(selectCurrentWithdrawPayMethod)

  const handleCancel = useCallback(() => history.push('/'), [history])
  const handleConfirm = useCallback(() => dispatch(sendBidRequest()), [dispatch])

  return (
    <div className="converter">
      <h1 className="converter__title h1">Details</h1>
      <div className="container__pad">
        <div className="converter__row currency__info">
          <span className="converter__type span--light">Sell</span>
          <span className="converter__amount">{withdrawAmount} {withdrawPayMethod.name}</span>
        </div>
        <div className="converter__row currency__info">
          <span className="converter__type span--light">Buy</span>
          <span className="converter__amount">{invoiceAmount} {invoicePayMethod.name}</span>
        </div>
      </div>
      <div className="converter__buttons">
        <Button onClick={handleCancel} variant="outline">Cancel</Button>
        <Button onClick={handleConfirm} isLoading={isLoading}>Confirm</Button>
      </div>
    </div>
  )
}

export default SubmitPage
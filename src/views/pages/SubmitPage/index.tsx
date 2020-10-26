import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
//components
import Button from 'views/reusable/Button'
//actions
import {sendBidRequest} from 'store/ducks/converter/actions'
//selectors
import {selectIsLoading,selectIsCalculating} from 'store/ducks/converter/selectors'
import {selectCurrentInvoicePayMethod, selectInvoiceAmount} from 'store/ducks/invoice/selectors'
import {selectCurrentWithdrawPayMethod, selectWithdrawAmount} from 'store/ducks/withdraw/selectors'
//styles
import "./SubmitPage.scss"

const SubmitPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const isCalculating = useSelector(selectIsCalculating)
  const invoiceAmount = useSelector(selectInvoiceAmount)
  const withdrawAmount = useSelector(selectWithdrawAmount)
  const invoicePayMethod = useSelector(selectCurrentInvoicePayMethod)
  const withdrawPayMethod = useSelector(selectCurrentWithdrawPayMethod)

  const handleCancel = useCallback(() => history.push('/'), [history])
  const handleConfirm = useCallback(() => dispatch(sendBidRequest()), [dispatch])

  return (
    <div className="submitPage page">
      <h1 className="h1">Details</h1>
      <div className="container__pad">
        <div className="page__row blk--mb">
          <span className="span--light">Sell</span>
          <span>{withdrawAmount.toFixed(2)} {withdrawPayMethod.name}</span>
        </div>
        <div className="page__row">
          <span className="span--light">Buy</span>
          <span>{invoiceAmount.toFixed(2)} {invoicePayMethod.name}</span>
        </div>
      </div>
      <div className="submitPage__buttons">
        <Button onClick={handleCancel} variant="outline">Cancel</Button>
        <Button onClick={handleConfirm} isLoading={isLoading || isCalculating} disabled={!invoiceAmount || !withdrawAmount}>Confirm</Button>
      </div>
    </div>
  )
}

export default SubmitPage
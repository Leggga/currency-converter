import React from 'react'
import {useDispatch} from 'react-redux'
import {getPayMethodsRequest} from 'store/ducks/invoice/actions'

const MainLayout: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getPayMethodsRequest())
  }

  return (
    <div className="app">
      <div onClick={handleClick}>Hello world</div>
    </div>
  )
}

export default MainLayout
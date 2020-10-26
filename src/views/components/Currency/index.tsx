import React from 'react'
//components
import Select, {OptionType} from 'views/reusable/Select'
import Input from 'views/reusable/Input'
//styles
import "./Currency.scss"


type Props = {
  title: string
  amount: string
  inputName: string
  isCalculating: boolean
  payMethods: OptionType[]
  currentPayMethodId: number
  handleChangeBase: () => void
  handleChangeAmount: (value: string | number) => void
  handleChangePaymentMethod: (option: OptionType)  => void
}

const Currency: React.FC<Props> = ({
                                     title, inputName, payMethods, currentPayMethodId, amount,
                                     isCalculating, handleChangeBase, handleChangeAmount, handleChangePaymentMethod
                                   }) =>
  (
    <div className="currency">
      <h1 className="currency__title h1">{title}</h1>
      <div className="currency__fields container__pad">
        <Select
          className="currency__field"
          options={payMethods}
          value={currentPayMethodId}
          onChange={handleChangePaymentMethod}
        />
        <Input
          className="currency__field"
          name='invoiceAmount'
          value={amount}
          type="text"
          isDecimal
          isLoading={isCalculating}
          onInput={handleChangeAmount}
          onFocus={handleChangeBase}
        />
      </div>
    </div>
  )

export default Currency
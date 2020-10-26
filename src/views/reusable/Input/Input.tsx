import React, {ChangeEvent, useEffect, useState} from 'react'
import {InputProps} from './Input.interface'
import Icon from 'views/reusable/Icon'

const Input: React.FC<InputProps> = ({
                                       className = '', name, value = '', isLoading,
                                       positiveNumber, onInput, onFocus, type = 'text'
                                     }) => {
  const [inputValue, setInputValue] = useState<string>(value)
  //State uses only for number mode.
  //Code below avoids remove float part of number when user typing
  //Problem: "12." => 12, "12.00" => "12"

  useEffect(() => {
    positiveNumber && setInputValue(value)
  }, [value, positiveNumber])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value

    if (positiveNumber) {
      const valueNumber = +currentValue
      let isValueCorrect = Number.isFinite(valueNumber) && valueNumber >= 0
      const normalizedValue = isValueCorrect ? currentValue : inputValue

      if (+normalizedValue !== +inputValue) { //prevents trigger onInput when typing space/character
        onInput(normalizedValue, name)
      }

      setInputValue(normalizedValue.trim())
    } else {
      onInput(currentValue, name)
    }
  }

  return (
    <div className={`field ${className}`}>
      <input
        className="input"
        type={type}
        name={name}
        value={inputValue}
        onInput={handleInput}
        onFocus={onFocus}
      />
      {
        isLoading && <Icon name="loader" className="loader"/>
      }
    </div>
  )
}

export default Input
import React, {ChangeEvent, useEffect, useState} from 'react'
import Icon from 'views/reusable/Icon'
import './Input.scss'

export type OnChangeType = (value: string | number, name: string) => void

interface InputProps {
  name: string
  type?: string
  value: string
  isDecimal?: boolean
  triggerEqualNumber?: boolean
  isLoading?: boolean
  className?: string
  onInput: OnChangeType
  onFocus?: () => void
}

const Input: React.FC<InputProps> = ({className = '', name, value = '', isLoading, isDecimal, triggerEqualNumber = false, onInput, onFocus, type = 'text'}) => {
  const [_value, _setValue] = useState<string>(value)
  //TODO remove useEffect, bind value
  //TODO remove lead zero
  useEffect(() => {
    _setValue(value)
  }, [value])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target

    if (isDecimal) {
      const valueNumber = +value
      const normalizedValue = !Number.isFinite(valueNumber) ? _value : valueNumber >= 0 ? value : _value
      // const normalizedValue = Number.isFinite(+value) ? value : _value
      const parsedNum = +normalizedValue
      _setValue(normalizedValue.trim())

      if (triggerEqualNumber) {
        onInput(parsedNum, name)
      } else {
        parsedNum !== +_value && onInput(parsedNum, name)
      }
    } else {
      onInput(value, name)
      _setValue(value)
    }
  }

  return (
    <div className={`field ${className}`}>
      <input
        className="input"
        type={type}
        name={name}
        value={_value}
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
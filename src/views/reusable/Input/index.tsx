import React, {ChangeEvent, InputHTMLAttributes, useEffect, useState} from 'react'
import Icon from 'views/reusable/Icon'
import './Input.scss'

export type OnChangeType = (value: string | number, name: string) => void

interface InputProps{
  name: string
  type?: string
  value: string
  isDecimal?: boolean
  isLoading?: boolean
  className?: string
  onInput: OnChangeType
}

const Input: React.FC<InputProps> = ({className='', name, value = '', isLoading, isDecimal, onInput, type = 'text'}) => {
  const [_value, _setValue] = useState<string>(value)
  //TODO remove useEffect, bind value
  //TODO if the value the same dont trigger
  //TODO remove lead zero/trim result
  useEffect(() => {
    _setValue(value)
  }, [value])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target

    if (isDecimal) {
      const parsed = Number.isNaN(+value) ? _value : +value >= 0 ? value : _value
      _setValue(parsed)
      onInput(+parsed, name)
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
      />
      {
        isLoading && <Icon name="loader" className="loader"/>
      }
    </div>
  )
}

export default Input
import React, {useCallback, useMemo, useRef, useState} from 'react'
import classNames from 'classnames'
import useOnClickOutside from 'hooks/useOnClickOutside'
import {OptionProps, OptionType, Props} from './Select.interface'
import Icon from 'views/reusable/Icon'
//styles
import './Select.styles.scss'

const Select: React.FC<Props> = ({options, value, placeholder = '', className = '', onChange}) => {
  const selectRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = useMemo(() => options.find(option => option.value === value), [options, value])

  useOnClickOutside(selectRef, () => setIsOpen(false))

  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const handleClickOption = useCallback((option: OptionType, selected: boolean) => {
    toggleIsOpen()
    !selected && onChange(option)
  }, [onChange, toggleIsOpen])

  return (
    <div className={classNames('select', className, {'select--opened': isOpen})} ref={selectRef}>
      <div className='select__top field' onClick={toggleIsOpen}>
        <span className="select__value">{selectedOption ? selectedOption.label : placeholder}</span>
        <Icon className='select__marker' name='arrow'/>
      </div>
      {
        isOpen &&
        <div className='select__bottom'>
          <div className='select__options'>
            {
              options.map(option =>
                <Option
                  selected={selectedOption?.value === option.value}
                  onClick={handleClickOption}
                  option={option}
                  key={option.value}
                />
              )
            }
          </div>
        </div>
      }
    </div>
  )
}

const Option: React.FC<OptionProps> = ({option, selected = false, onClick}) => {
  const handleOptionClick = useCallback(() => onClick(option, selected), [onClick, option, selected])

  return (<div
      className={classNames('select__option', {'select__option--selected': selected})}
      onClick={handleOptionClick}
    >{option.label}</div>
  )
}


export default Select
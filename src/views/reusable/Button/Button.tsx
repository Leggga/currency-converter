import React, {ButtonHTMLAttributes, memo, useCallback} from 'react'
import Icon from 'views/reusable/Icon'
import {Props} from './Button.interface'
import './Button.styles.scss'

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
       classname = '',
       variant = 'primary',
       isLoading,
       children,
       onClick
     }) => {
  const handleClick = useCallback(e => !isLoading && onClick(e), [onClick, isLoading])

  return (
    <button
      className={`btn btn--${variant} ${classname}`}
      onClick={handleClick}
    >
      {isLoading ? <Icon name='loader' className='loader'/> : children}
    </button>
  )
}

export default memo(Button)
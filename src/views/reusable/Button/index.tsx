import React, {ButtonHTMLAttributes, useCallback} from 'react'
import Icon from 'views/reusable/Icon'
import './Button.scss'

type PropsType = {
  variant?: 'primary' | 'outline'
  children: string
  classname?: string
  isLoading?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<PropsType & ButtonHTMLAttributes<HTMLButtonElement>>
  = React.memo(({
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
})

export default Button
import React, {ButtonHTMLAttributes, memo, useCallback} from 'react'
import classNames from 'classnames'
import Icon from 'views/reusable/Icon'
import {Props} from './Button.interface'
import './Button.styles.scss'

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
                                                                             classname = '',
                                                                             variant = 'primary',
                                                                             isLoading,
                                                                             disabled,
                                                                             children,
                                                                             onClick
                                                                           }) => {
  const handleClick = useCallback(e => (!isLoading && !disabled) && onClick(e), [onClick, isLoading, disabled])

  return (
    <button
      className={classNames('btn', `btn--${variant}`, {'btn--disabled': disabled}, classname)}
      onClick={handleClick}
    >
      {isLoading ? <Icon name='loader' className='loader'/> : children}
    </button>
  )
}

export default memo(Button)
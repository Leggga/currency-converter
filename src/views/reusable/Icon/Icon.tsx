import React, {memo, useMemo} from 'react'
//assets
import {ReactComponent as ArrowIcon} from 'assets/icons/arrow.svg'
import {ReactComponent as LoaderIcon} from 'assets/icons/loader.svg'
import {ReactComponent as ShieldIcon} from 'assets/icons/shield.svg'
import {IconsPack, Props} from './Icon.interface'

const icons: IconsPack = {
  arrow: ArrowIcon,
  loader: LoaderIcon,
  shield: ShieldIcon
}

const Icon: React.FC<Props> = ({name, className = '', ...props}) => {
  const IconElement = useMemo(() => icons[name], [name])

  return (
    <IconElement className={className} {...props} />
  )
}

export default memo(Icon)

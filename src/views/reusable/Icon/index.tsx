import React, {memo, SVGProps, useMemo} from 'react'
//assets
import {ReactComponent as ArrowIcon} from 'assets/icons/arrow.svg'
import {ReactComponent as LoaderIcon} from 'assets/icons/loader.svg'

type IconsNames = 'arrow' | 'loader'

const icons: Record<IconsNames, React.FC<SVGProps<SVGSVGElement>>> = {
  arrow: ArrowIcon,
  loader: LoaderIcon
}

type Props = {
  name: IconsNames
  className?: string
}

const Icon: React.FC<Props> = ({name, className = '', ...props}) => {
  const IconElement = useMemo(() => icons[name], [name])

  return (
    <IconElement className={className} {...props} />
  )
}

export default memo(Icon)

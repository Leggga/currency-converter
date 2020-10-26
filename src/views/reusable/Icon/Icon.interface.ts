import React, {SVGProps} from 'react'

export type IconsNames = 'arrow' | 'loader' | 'shield'
export type IconsPack = Record<IconsNames, React.FC<SVGProps<SVGSVGElement>>>
export type Props = {
  name: IconsNames
  className?: string
}
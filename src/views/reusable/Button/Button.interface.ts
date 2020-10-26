import React from 'react'

export type Props = {
  variant?: 'primary' | 'outline'
  children: string
  classname?: string
  isLoading?: boolean
  disabled?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
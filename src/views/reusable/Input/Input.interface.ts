export type OnChangeType = (value: string , name: string) => void

export interface InputProps {
  name: string
  type?: string
  value: string
  positiveNumber?: boolean
  triggerEqualNumber?: boolean
  isLoading?: boolean
  className?: string
  onInput: OnChangeType
  onFocus?: () => void
}
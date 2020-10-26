export type OptionType = {
  value: number
  label: string
}
export type Props = {
  options: OptionType[]
  value: number
  className?: string
  placeholder?: string
  onChange: (option: OptionType) => void
}
export type OptionProps = {
  selected: boolean
  option: OptionType
  onClick: (option: OptionType, isSelected: boolean) => void
}
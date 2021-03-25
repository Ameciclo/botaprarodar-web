import { InputHTMLAttributes, useState } from 'react'

import styles from './styles.module.scss'

type InputTextProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function InputText({
  icon,
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  ...props
}: InputTextProps) {
  const [value, setValue] = useState(initialValue)
  const [isFocus, setIsFocus] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  const handleActiveClass = () => (isFocus ? styles.active : '')

  return (
    <div className={styles.container}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <div className={`${styles.wrapperInput} ${handleActiveClass()}`}>
        {!!icon && <div className="icon">{icon}</div>}

        <input
          onChange={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </div>
    </div>
  )
}

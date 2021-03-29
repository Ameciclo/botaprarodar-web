import { SelectHTMLAttributes, useState } from 'react'

import styles from './styles.module.scss'

type Option = {
  value: string
  text: string
}

type InputSelectPropss = {
  options: Option[]
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export function InputSelect({
  options,
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  ...props
}: InputSelectPropss) {
  return (
    <div className={styles.container}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <div className={`${styles.wrapperInput}`}>
        <select name="" id="" {...props}>
          {options.map((option) => (
            <option key={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

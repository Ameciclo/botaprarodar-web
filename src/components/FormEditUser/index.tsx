import React from 'react'

import { InputText } from '../InputText'
import { InputSelect } from 'components/InputSelect'
import { Button } from '../Button'

import styles from './styles.module.scss'

const GENDER_OPTIONS = [
  {
    value: '0',
    text: 'Masculino'
  },
  {
    value: '1',
    text: 'Feminino'
  },
  {
    value: '2',
    text: 'Outros'
  },
  {
    value: '3',
    text: 'Prefere não responder'
  }
]

export function FormEditUser() {
  return (
    <form className={styles.wrapper}>
      <InputText type="text" placeholder="Nome" />

      <InputSelect options={GENDER_OPTIONS} placeholder="Selecionar gênero" />

      <InputText type="text" placeholder="Endereço" />

      <Button type="submit">Entrar</Button>
    </form>
  )
}

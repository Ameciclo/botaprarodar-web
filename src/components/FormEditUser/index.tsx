import React from 'react'

import { InputText } from 'components/InputText'
import { InputSelect } from 'components/InputSelect'
import { InputFile } from 'components/InputFile'
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

const STATUS_OPTIONS = [
  {
    value: '0',
    text: 'Desativado'
  },
  {
    value: '1',
    text: 'Ativo'
  }
]

export function FormEditUser() {
  return (
    <form className={styles.wrapper}>
      <div className={styles.filesWrapper}>
        <InputFile
          name="profile"
          label="Foto de perfil"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fuser%2F1234%20_thumb_1615330652.jpg?alt=media&token=230aaeff-75ef-4547-a199-625bd6dd6e10"
        />
        <InputFile
          name="profile"
          label="Comprovante (frente)"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fuser%2F1234%20_thumb_1615330652.jpg?alt=media&token=230aaeff-75ef-4547-a199-625bd6dd6e10"
        />
        <InputFile name="profile" label="Comprovante (verso)" />
      </div>

      <InputText type="text" placeholder="Nome" label="Nome completo" />

      <InputSelect
        options={GENDER_OPTIONS}
        placeholder="Selecionar gênero"
        label="Gênero"
      />

      <InputText type="text" placeholder="Endereço" label="Endereço" />

      <InputSelect options={STATUS_OPTIONS} label="Status da conta" />

      <Button type="submit">Entrar</Button>
    </form>
  )
}

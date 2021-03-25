import { FiMail, FiLock } from 'react-icons/fi'

import { InputText } from 'components/InputText'
import { Button } from 'components/Button'

import styles from './styles.module.scss'

export function FormSignIn() {
  return (
    <form className={styles.wrapper}>
      <InputText type="text" placeholder="E-mail" icon={<FiMail />} />
      <InputText type="password" placeholder="Senha" icon={<FiLock />} />
      <Button type="submit">Entrar</Button>
    </form>
  )
}

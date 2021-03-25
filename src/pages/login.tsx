import { FormSignIn } from 'components/FormSignIn'

import styles from '../styles/pages/login.module.scss'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Login</h1>

        <FormSignIn />
      </div>
    </div>
  )
}

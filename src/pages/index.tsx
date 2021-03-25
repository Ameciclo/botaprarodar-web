import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'

import styles from '../styles/pages/index.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <Sidebar />

      <Content title="Todos usuários">oi</Content>
    </main>
  )
}

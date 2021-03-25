import { Button } from 'components/Button'
import { FiHome, FiUser, FiGlobe } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Sidebar() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header>
          <h2>Dashboard</h2>
        </header>

        <nav>
          <ul>
            <li>
              <a href="#">
                <FiHome />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <FiUser />
                Usuários
              </a>
            </li>
            <li>
              <a href="#">
                <FiGlobe />
                Comunidades
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.wrapperSignOut}>
        <Button>Sair</Button>
      </div>
    </section>
  )
}

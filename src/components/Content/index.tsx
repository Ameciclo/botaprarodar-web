import { ReactNode } from 'react'

import styles from './styles.module.scss'

type ContentProps = {
  title: string
  children: ReactNode
}

export function Content({ title, children }: ContentProps) {
  return (
    <main className={styles.container}>
      <header>
        <h1>{title}</h1>
      </header>

      <div className={styles.content}>{children}</div>
    </main>
  )
}

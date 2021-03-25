import Head from 'next/head'
import { ReactNode } from 'react'

import { Sidebar } from 'components/Sidebar'

import styles from './styles.module.scss'

type BaseProps = {
  children: ReactNode
  title: string
}

export function Base({ title, children }: BaseProps) {
  return (
    <>
      <Head>
        <title>{title} | Bota pra rodar</title>
      </Head>

      <main className={styles.container}>
        <Sidebar />

        <div className={styles.content}>
          <header>
            <h1>{title}</h1>
          </header>

          <div>{children}</div>
        </div>
      </main>
    </>
  )
}

import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'

import styles from './styles.module.scss'

export function TableUsers() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Comunidade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucas Lopes Nogueira</td>
            <td>lucas@mail.com</td>
            <td>Belo Horizonte/MG</td>
            <td>Ativo</td>
            <td>
              <Link href="/">
                <a title="Editar usuário">
                  <FiEdit />
                </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

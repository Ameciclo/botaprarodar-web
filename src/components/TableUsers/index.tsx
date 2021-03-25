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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucas Lopes Nogueira</td>
            <td>lucas@mail.com</td>
            <td>Belo Horizonte/MG</td>
            <td>Ativo</td>
          </tr>
          <tr>
            <td>Lucas Lopes Nogueira</td>
            <td>lucas@mail.com</td>
            <td>Belo Horizonte/MG</td>
            <td>Ativo</td>
          </tr>
          <tr>
            <td>Lucas Lopes Nogueira</td>
            <td>lucas@mail.com</td>
            <td>Belo Horizonte/MG</td>
            <td>Ativo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

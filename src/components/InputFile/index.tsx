import { FiCamera } from 'react-icons/fi'

import styles from './styles.module.scss'

type InputFileProps = {
  name: string
  imageUrl?: string
  label: string
}

export function InputFile({ name, imageUrl, label }: InputFileProps) {
  return (
    <div className={styles.container}>
      <img
        src={imageUrl ?? '/images/file-thumbnail.jpeg'}
        alt="Image preview"
      />

      <label htmlFor={name}>
        <div>
          <FiCamera /> {label}
        </div>
        <input type="file" id={name} />
      </label>
    </div>
  )
}

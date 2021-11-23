import styles from '@/styles/Button.module.css'
import { Spinner } from '@chakra-ui/react'
import style from '@/styles/loader.module.css'

export default function ButtonGreen({type, icon, loading, title, children}) {
  return (
    <button type={type} className={styles.btnGreen}>
      
      {loading ? <div className={style.card}>
      <Spinner
      thickness='3px'
      speed='0.50s'
      emptyColor='gray.200'
      color='gray.800'
      size='md'
    />
      <h2>{title}...</h2>
    </div>
       : <>{icon} <p>{children}</p> </> }
    </button>
  )
}

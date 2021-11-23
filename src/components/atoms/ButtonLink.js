import styles from '@/styles/Button.module.css'
import Link from 'next/link'

export default function ButtonLink({href, title, children}) {
  return (
    <Link href={href}>
      <a className={styles.btnLink}>{children}</a>
    </Link>
  )
}

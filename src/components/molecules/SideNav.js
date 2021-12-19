import { Box } from '@chakra-ui/react'
import styles from '@/styles/Settings.module.css'
import Link from '@/components/atoms/Link'

export default function SideNav() {
  return (
    <Box className={styles.sideNav}>
      <nav className={styles.nav}>
        <Link href='/admin/settings/'>
          <a fontWeight='bold' className={styles.link}>
            Account
          </a>
        </Link>
        <Link href='/admin/settings/notification'>
          <a className={styles.link}>Notification</a>
        </Link>
        <Link href='/admin/settings/security'>
          <a className={styles.link}>Security</a>
        </Link>
      </nav>
    </Box>
  )
}

import { Box } from "@chakra-ui/react";
import styles from "@/styles/Layout.module.css";
import Link from "@/components/atoms/Link";
import {
  FaChartPie,
  FaListUl,
  FaUsers,
  FaBook,
  FaUserTie,
  FaTh,
} from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { RiWifiOffLine } from "react-icons/ri";

// import { ButtonBg } from '@/components/common/Button'
import Logo from "@/components/atoms/Logo";
import logoImage from "@/assets/logo1.svg";

export default function Aside({ data }) {
  return (
    <aside className={styles.aside}>
      <Box className={styles.logo}>
        <Logo src={logoImage} />
      </Box>

      <nav className={styles.nav}>
        <Link href="/admin">
          <a className={styles.navLink}>
            <FaChartPie className={styles.icon} /> Dashboard
          </a>
        </Link>
        <Link href="/admin/orders">
          <a className={styles.navLink}>
            <FaListUl className={styles.icon} /> Orders
          </a>
        </Link>
        <Link href="/admin/support">
          <a className={styles.navLink}>
            <BiSupport className={styles.icon} /> Support
          </a>
        </Link>
        <Link href="/admin/finance">
          <a className={styles.navLink}>
            <BsBarChartFill className={styles.icon} /> Finance
          </a>
        </Link>
        <Link href="/admin/quote">
          <a className={styles.navLink}>
            <FaUserTie className={styles.icon} /> Quote Request
          </a>
        </Link>
        <hr />
        <Link href="/admin/offline">
          <a className={styles.navLink}>
            <RiWifiOffLine className={styles.icon} /> Offline Order
          </a>
        </Link>
        <Link href="/admin/users">
          <a className={styles.navLink}>
            <FaUsers className={styles.icon} /> Users
          </a>
        </Link>
        {data?.role === "1" && (
          <Link href="/admin/manage">
            <a className={styles.navLink}>
              <FaTh className={styles.icon} /> Manage Site
            </a>
          </Link>
        )}

        <Link href="/admin/settings">
          <a className={styles.navLink}>
            <FiSettings className={styles.icon} /> Settings
          </a>
        </Link>
      </nav>
    </aside>
  );
}

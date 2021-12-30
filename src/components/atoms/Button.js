import styles from '@/styles/Button.module.css';
import { Spinner } from '@chakra-ui/react';
import loaderStyle from '@/styles/loader.module.css';

export default function Button({
  type,
  icon,
  loading,
  title,
  children,
  style,
}) {
  return (
    <button type={type} className={styles.btn} style={style}>
      {loading ? (
        <div className={loaderStyle.card}>
          <Spinner
            thickness="3px"
            speed="1.5s"
            emptyColor="gray.200"
            color="gray.800"
            size="sm"
            mr="4"
          />
          <h6>{title}...</h6>
        </div>
      ) : (
        <>
          {icon} <span>{children}</span>{' '}
        </>
      )}
    </button>
  );
}

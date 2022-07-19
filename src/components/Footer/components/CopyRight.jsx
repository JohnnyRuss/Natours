/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './copyright.module.scss';

function CopyRight() {
  return (
    <p className={`col-1-of-2 ${styles.footerCopyRight}`}>
      Built by{' '}
      <a href='#' className={styles.footerLink}>
        Jonas Schmedtmann
      </a>{' '}
      for his online course
      <a href='#' className={styles.footerLink}>
        {' '}
        advanced CSS and SASS{' '}
      </a>
      Copyright <>&copy;</> Jonas Schmedtmann.
    </p>
  );
}

export default CopyRight;

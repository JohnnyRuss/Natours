import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.floatContainer}>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-2']}>col-1-of-2</div>
        <div className={styles['col-1-of-2']}>col-1-of-2</div>
      </div>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-3']}>col-1-of-3</div>
        <div className={styles['col-1-of-3']}>col-1-of-3</div>
        <div className={styles['col-1-of-3']}>col-1-of-3</div>
      </div>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-3']}>col-1-of-3</div>
        <div className={styles['col-2-of-3']}>col-2-of-3</div>
      </div>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
      </div>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-2-of-4']}>col-2-of-4</div>
      </div>
      <div className={styles.floatRow}>
        <div className={styles['col-1-of-4']}>col-1-of-4</div>
        <div className={styles['col-3-of-4']}>col-2-of-4</div>
      </div>
    </div>
  );
}

export default Layout;

import { Fragment } from 'react';
import styles from './navBTN.module.scss';

function NavBTN({ className, navRef }) {
  return (
    <Fragment>
      <input
        type='checkbox'
        className={`${styles.navCheckbox} ${className}`}
        id='navToggle'
        ref={navRef}
      />
      <label htmlFor='navToggle' className={styles.navBTN}>
        <span className={styles.navigationIcon}>&nbsp;</span>
      </label>
    </Fragment>
  );
}

export default NavBTN;

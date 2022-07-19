/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './btn.module.scss';

function LinkBTN({ path = '#', content, className }) {
  return (
    <a href={path} className={`${styles.btn} ${className}`}>
      {content}
    </a>
  );
}

export default LinkBTN;

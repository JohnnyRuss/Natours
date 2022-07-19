/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './navListItem.module.scss';

function NavListItem({ path, num, caption, onClick }) {
  return (
    <li className={styles.navListItem} onClick={onClick}>
      <a href={path} className={styles.navListItemLink}>
        <span className={styles.navListItemNum}>{num}</span> {caption}
      </a>
    </li>
  );
}

export default NavListItem;

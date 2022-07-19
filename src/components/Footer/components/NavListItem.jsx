/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './navListItem.module.scss';

function NavListItem({ path, caption }) {
  return (
    <li className={styles.footerNavListItem}>
      <a href={path} className={styles.footerNavListItemLink}>
        {caption}
      </a>
    </li>
  );
}

export default NavListItem;

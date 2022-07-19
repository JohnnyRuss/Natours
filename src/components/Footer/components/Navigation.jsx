import styles from './navigation.module.scss';
import NavListItem from './NavListItem';

function Navigation() {
  return (
    <nav className={`col-1-of-2 ${styles.footerNav}`}>
      <ul className={styles.footerNavList}>
        <NavListItem path='#' caption='company' />
        <NavListItem path='#' caption='contact us' />
        <NavListItem path='#' caption='carrers' />
        <NavListItem path='#' caption='privacy policy' />
        <NavListItem path='#' caption='terms' />
      </ul>
    </nav>
  );
}

export default Navigation;

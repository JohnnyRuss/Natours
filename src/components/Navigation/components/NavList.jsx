import styles from './navList.module.scss';
import NavListItem from './NavListItem';

function NavList({ className, onNavigation }) {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <ul className={styles.navList}>
        <NavListItem path='/#about' num='01' caption='about natours' onClick={onNavigation} />
        <NavListItem path='/#features' num='02' caption='your benefits' onClick={onNavigation} />
        <NavListItem path='/#tours' num='03' caption='popular tours' onClick={onNavigation} />
        <NavListItem path='/#stories' num='04' caption='stories' onClick={onNavigation} />
        <NavListItem path='/#booking' num='05' caption='book now' onClick={onNavigation} />
      </ul>
    </nav>
  );
}

export default NavList;

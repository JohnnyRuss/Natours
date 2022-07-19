import styles from './navBackground.module.scss';

function NavBackground({ className }) {
  return <div className={`${styles.navBackground} ${className}`}>&nbsp;</div>;
}

export default NavBackground;

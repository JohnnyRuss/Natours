import { useRef } from 'react';

import styles from './components/navigation.module.scss';
import NavBTN from './components/NavBTN';
import NavBackground from './components/NavBackground';
import NavList from './components/NavList';

function Navigation() {
  const checkBoxRef = useRef();
  const handleNavigation = () => (checkBoxRef.current.checked = false);

  return (
    <nav className={styles.navigationContainer}>
      <NavBTN className={styles.checkbox} navRef={checkBoxRef} />
      <NavBackground className={styles.navBackground} />
      <NavList className={styles.navigation} onNavigation={handleNavigation} />
    </nav>
  );
}

export default Navigation;

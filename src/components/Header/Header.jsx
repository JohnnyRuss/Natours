import styles from './components/header.module.scss';
import HeadingTitle from './components/HeadingContent';
import { LogoWhite, LinkBTN } from '../Layout';

function Header() {
  return (
    <header className={styles.header}>
      <LogoWhite />
      <HeadingTitle>
        <LinkBTN
          content='discover more'
          path='/#about'
          className={`${styles.discoverBTN} ${styles['discoverBTN-Animated']}`}
        />
      </HeadingTitle>
    </header>
  );
}

export default Header;

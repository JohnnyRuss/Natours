import styles from './components/footer.module.scss';
import { FloatContainer, FooterLogo } from '../Layout';
import Navigation from './components/Navigation';
import CopyRight from './components/CopyRight';

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterLogo />
      <FloatContainer>
        <Navigation />
        <CopyRight />
      </FloatContainer>
    </footer>
  );
}

export default Footer;

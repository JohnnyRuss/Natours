import styles from './logo.module.scss';

function LogoWhite() {
  return (
    <figure className={styles.logoWhite}>
      <img src='./assets/logo-white.png' alt='app logo' className={styles.logo} />
    </figure>
  );
}

export default LogoWhite;

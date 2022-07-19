import styles from './logo.module.scss';

function FooterLogo() {
  return (
    <figure className={styles.footerLogo}>
      <picture className={styles.ogo}>
        <source
          media='(max-width:37.5em)'
          srcSet='/assets/logo-green-small-1x.png 1x, /assets/logo-green-small-2x.png 2x'
        />
        <img
          srcSet='/assets/logo-green-1x.png 1x, /assets/logo-green-2x.png 2x'
          alt='full logo'
        />
      </picture>
    </figure>
  );
}

export default FooterLogo;

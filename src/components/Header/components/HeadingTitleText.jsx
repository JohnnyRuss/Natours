import styles from './headingContent.module.scss';

function HeadingTitleText() {
  return (
    <h1 className={styles.headingTitleText}>
      <span className={styles.headingTitleTextMain}>outdoors</span>
      <span className={styles.headingTitleTextSub}>is where life happens</span>
    </h1>
  );
}

export default HeadingTitleText;

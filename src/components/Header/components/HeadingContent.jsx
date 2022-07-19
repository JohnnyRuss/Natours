import styles from './headingContent.module.scss';
import HeadingTitleText from './HeadingTitleText';

function HeadingContent({ children }) {
  return (
    <div className={styles.headingContent}>
      <HeadingTitleText />
      {children}
    </div>
  );
}

export default HeadingContent;

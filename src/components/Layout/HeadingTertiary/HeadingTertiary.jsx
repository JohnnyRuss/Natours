import styles from './styles.module.scss';

function HeadingTertiary({ content, className }) {
  return <h3 className={`${styles.headingTertiary} ${className}`}>{content}</h3>;
}

export default HeadingTertiary;

import styles from './styles.module.scss';

function HeadingSecondary({content, className}) {
  return <h2 className={`${styles.headingSecondary} ${className}`}>{content}</h2>;
}

export default HeadingSecondary;

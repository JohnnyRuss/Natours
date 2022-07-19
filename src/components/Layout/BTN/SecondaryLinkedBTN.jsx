import styles from './btn.module.scss';

function SecondaryLinkedBTN({ path = '#', content, className }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href={path} className={`${styles.secondaryBTN} ${className}`}>
      {content}
    </a>
  );
}

export default SecondaryLinkedBTN;

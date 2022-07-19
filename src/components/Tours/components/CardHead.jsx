import { Fragment } from 'react';
import styles from './cardHead.module.scss';

function CardHead({ tour, index }) {
  return (
    <Fragment>
      <div className={`${styles.cardHeadImage} ${styles[`cardHeadImage-${index + 1}`]}`}>{''}</div>
      <h4 className={styles.tourCardHeading}>
        <span className={`${styles.headingBreak} ${styles[`headingBreak-${index + 1}`]}`}>
          {tour.title}
        </span>
      </h4>
    </Fragment>
  );
}

export default CardHead;

import styles from './tour.module.scss';
import CardHead from './CardHead';
import TourDetailsList from './TourDetailsList';
import CardActions from './CardActions';

function Tour({ tour, index }) {
  return (
    <div className={`col-1-of-3`}>
      <div className={styles.card}>
        <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
          <CardHead tour={tour} index={index} />
          <TourDetailsList tour={tour} />
        </div>
        <div
          className={`${styles.cardSide} ${styles.cardSideBack} ${
            styles[`cardSideBack-${index + 1}`]
          }`}>
          <CardActions tour={tour} />
        </div>
      </div>
    </div>
  );
}

export default Tour;

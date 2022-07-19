import styles from './tourDetailsList.module.scss';

function TourDetailsList({ tour }) {
  return (
    <div className={styles.tourDetails}>
      <ul className={styles.tourDetailsList}>
        <li>{tour.tourLength} day tours</li>
        <li>Up to {tour.maxGroupSize} people</li>
        <li>{tour.guidesAmount} tour guides</li>
        <li>Sleep in {tour.sleepIn}</li>
        <li>Difficulty:{tour.difficulty}</li>
      </ul>
    </div>
  );
}

export default TourDetailsList;

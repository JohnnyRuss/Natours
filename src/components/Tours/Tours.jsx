import styles from './components/tours.module.scss';
import PopUp from './PopUp';
import Tour from './components/Tour';
import { HeadingSecondary, FloatContainer, LinkBTN } from '../Layout';
import { tourDetails } from '../../lib';

function Tours() {
  function handleClosePopUp(e) {
    if (!e.target.closest('.popup-content')) window.location.hash = '#tours';
  }

  return (
    <section className={styles.tours} id='tours'>
      <HeadingSecondary content='most popular tours' className={styles.spaceHeadingSecondary} />
      <FloatContainer>
        {tourDetails.map((tour, i) => (
          <Tour tour={tour} index={i} key={`tour card:${i}`} />
        ))}
      </FloatContainer>
      <LinkBTN content='discover all tours' className={styles.discoverBTN} />
      <PopUp onClosePopUp={handleClosePopUp} />
    </section>
  );
}

export default Tours;

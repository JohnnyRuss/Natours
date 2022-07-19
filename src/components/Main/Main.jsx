import { About, Features, Tours, Stories, Booking } from '../';
import styles from './styles.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </main>
  );
}

export default Main;

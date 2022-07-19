import styles from './components/booking.module.scss';
import { HeadingSecondary, LinkBTN } from '../Layout';
import InputField from './components/InputField';
import InputRadio from './components/InputRadio';

function Booking() {
  return (
    <section className={styles.booking} id='booking'>
      <div className={styles.book}>
        <form className={styles.form}>
          <HeadingSecondary
            content='start booking now !'
            className={styles.spaceHeadingSecondary}
          />
          <InputField type='text' placeholder='full name' id='fullName' />
          <InputField type='email' placeholder='email adress' id='email' />

          <InputRadio id='small' caption='small tour group' />
          <InputRadio id='large' caption='large tour group' />

          <LinkBTN className={styles.nextStepBTN} content='next steps' />
        </form>
      </div>
    </section>
  );
}

export default Booking;

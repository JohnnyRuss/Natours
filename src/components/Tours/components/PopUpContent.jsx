import styles from './popUpContent.module.scss';
import { HeadingSecondary, HeadingTertiary, LinkBTN } from '../../Layout';

function PopUpContent() {
  return (
    <div className={styles.popupRight}>
      <a href='#tours' className={styles.popupClose}>
        &times;
      </a>
      <HeadingSecondary content='start booking now' className={styles.seconderyHead} />
      <HeadingTertiary
        content='Important &ndash; please read these terms before booking'
        className={styles.tertiaryHead}
      />
      <p className={styles.popupText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero, et suscipit
        incidunt similique, temporibus nulla, neque quam illum harum expedita exercitationem labore
        voluptates aspernatur eum nostrum sunt quis quas. loewm100 Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veritatis voluptate quisquam quo eligendi consequuntur,
        corrupti reiciendis aliquid. Saepe quia voluptate fugiat? Cum natus doloremque excepturi
        doloribus, voluptatum exercitationem, autem quaerat minima, unde cumque sit debitis earum.
      </p>
      <LinkBTN content='book now' className={styles.bookBTN} />
    </div>
  );
}

export default PopUpContent;
